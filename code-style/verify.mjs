import { ESLint } from 'eslint';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { cp, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import prettier from 'prettier';
import stylelint from 'stylelint';
import ts from 'typescript';

const EXACT_OPTIONAL_DIAGNOSTIC = 2375;
const INCOMPATIBLE_TYPE_DIAGNOSTIC = 2322;
const EXPECTED_ASSIGNMENT_ERRORS = 2;
const root = import.meta.dirname;
const workspace = await mkdtemp(path.join(tmpdir(), 'code-style-verify-'));
const prettierOptions = JSON.parse(await readFile(path.join(root, '.prettierrc.json'), 'utf8'));

try {
  for (const filename of ['eslint.config.mjs', 'stylelint.config.mjs', 'tsconfig.base.json']) {
    await cp(path.join(root, filename), path.join(workspace, filename));
  }
  await symlink(path.join(root, 'node_modules'), path.join(workspace, 'node_modules'), 'dir');
  await writeFile(path.join(workspace, 'package.json'), '{"type":"module"}');
  await writeFile(
    path.join(workspace, 'tsconfig.json'),
    JSON.stringify({
      compilerOptions: {
        jsx: 'react-jsx',
        module: 'NodeNext',
        moduleResolution: 'NodeNext',
        noEmit: true,
        skipLibCheck: true,
        target: 'ES2022',
      },
      extends: './tsconfig.base.json',
      include: ['**/*.ts', '**/*.tsx'],
    }),
  );
  await cp(path.join(root, 'examples'), path.join(workspace, 'examples'), { recursive: true });
  const eslint = new ESLint({
    cwd: workspace,
    overrideConfig: { settings: { react: { version: '19.3' } } },
  });
  const examples = await eslint.lintFiles(['examples/**/*.ts', 'examples/**/*.tsx']);
  assert.equal(
    examples.reduce((sum, result) => sum + result.errorCount, 0),
    0,
    JSON.stringify(examples.flatMap((result) => result.messages)),
  );
  execFileSync(process.execPath, [
    path.join(root, 'node_modules/typescript/bin/tsc'),
    '--project',
    path.join(workspace, 'tsconfig.json'),
  ]);

  const strictFile = path.join(workspace, 'strict-options.ts');
  await writeFile(
    strictFile,
    `const input: { value?: string } = { value: undefined };
const first: string = ([] as string[])[0];
const count: number = null;
export { count, first, input };`,
  );
  const parsed = ts.getParsedCommandLineOfConfigFile(
    path.join(workspace, 'tsconfig.json'),
    {},
    {
      ...ts.sys,
      onUnRecoverableConfigFileDiagnostic: (diagnostic) => {
        throw new Error(String(diagnostic.messageText));
      },
    },
  );
  assert(parsed);
  const program = ts.createProgram(parsed.fileNames, parsed.options);
  const diagnostics = ts
    .getPreEmitDiagnostics(program)
    .filter((diagnostic) => diagnostic.file?.fileName === strictFile);
  assert(
    diagnostics.some((diagnostic) => diagnostic.code === EXACT_OPTIONAL_DIAGNOSTIC),
    'exactOptionalPropertyTypes',
  );
  assert(
    diagnostics.filter((diagnostic) => diagnostic.code === INCOMPATIBLE_TYPE_DIAGNOSTIC).length >=
      EXPECTED_ASSIGNMENT_ERRORS,
    'strict null and indexed access',
  );

  const cases = [
    ['loose.ts', 'export const compare = (value: string): boolean => value == "";', 'eqeqeq'],
    [
      'any.ts',
      'export const accept = (value: any): unknown => value;',
      '@typescript-eslint/no-explicit-any',
    ],
    [
      'return-type.ts',
      'export const calculate = () => 1;',
      '@typescript-eslint/explicit-module-boundary-types',
    ],
    [
      'params.ts',
      'export const sum = (first: number, second: number, third: number): number => first + second + third;',
      'max-params',
    ],
    [
      'promise.ts',
      'export const run = (): void => { void Promise.resolve(1); };',
      '@typescript-eslint/no-floating-promises',
    ],
    [
      'foreach.ts',
      'export const run = (items: number[]): void => { items.forEach(async (item) => { await Promise.resolve(item); }); };',
      '@typescript-eslint/no-misused-promises',
    ],
    [
      'groups.ts',
      'export type Options = { optional?: boolean; required: string; };',
      'perfectionist/sort-object-types',
    ],
    [
      'non-null.ts',
      'export const first = (items: string[]): string => items[0]!;',
      '@typescript-eslint/no-non-null-assertion',
    ],
    [
      'button.tsx',
      'import type { ReactElement } from "react"; export const Button = (): ReactElement => <button>Save</button>;',
      'react/button-has-type',
    ],
  ];
  for (const [filename, code, rule] of cases) {
    const filePath = path.join(workspace, filename);
    await writeFile(filePath, code);
    const results = await eslint.lintFiles([filePath]);
    assert(
      results.some((result) => result.messages.some((message) => message.ruleId === rule)),
      `${filename}: expected ${rule}, got ${JSON.stringify(results.flatMap((result) => result.messages))}`,
    );
  }

  const cssConfig = path.join(workspace, 'stylelint.config.mjs');
  const goodCss = await stylelint.lint({
    configFile: cssConfig,
    files: path.join(workspace, 'examples/**/*.css'),
  });
  assert.equal(
    goodCss.errored,
    false,
    JSON.stringify(goodCss.results.map((result) => result.warnings)),
  );
  const cssCases = [
    ['.card { background: red; }', 'property-disallowed-list'],
    ['.card { gap: 8px; }', 'property-disallowed-list'],
    ['.card { border-radius: 8px; }', 'property-disallowed-list'],
    ['.card span { color: red; }', 'selector-max-type'],
    ['#card { color: red; }', 'selector-max-id'],
    ['.card { color: red !important; }', 'declaration-no-important'],
    ['.card { transition-property: all; }', 'declaration-property-value-disallowed-list'],
    ['.card { color: red; display: block; }', 'order/properties-order'],
    ['.card { line-height: 24px; font-size: 16px; }', 'order/properties-order'],
  ];
  for (const [code, rule] of cssCases) {
    const result = await stylelint.lint({
      code,
      codeFilename: 'sample.css',
      configFile: cssConfig,
    });
    assert(
      result.results.some((item) => item.warnings.some((warning) => warning.rule === rule)),
      `expected ${rule}, got ${JSON.stringify(result.results.map((item) => item.warnings))}`,
    );
  }

  const formatted = await prettier.format('if (value === "") { return; }', {
    ...prettierOptions,
    parser: 'typescript',
  });
  assert.equal(formatted, "if (value === '') {\n  return;\n}\n");
  for (const filename of [
    'examples/Button/Button.tsx',
    'examples/Button/Button.module.css',
    'examples/count-items.ts',
  ]) {
    const filepath = path.join(root, filename);
    const source = await readFile(filepath, 'utf8');
    assert(
      await prettier.check(source, { ...prettierOptions, filepath }),
      `${filename}: formatting`,
    );
  }

  console.log(
    `Passed: valid TS/TSX/CSS examples, TypeScript, ${cases.length} ESLint rejection cases, ${cssCases.length} Stylelint rejection cases, formatting.`,
  );
} finally {
  await rm(workspace, { force: true, recursive: true });
}
