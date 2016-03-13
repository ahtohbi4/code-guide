JavaScript
==

[↩ Code Style](https://github.com/ahtohbi4/code-style/blob/master/README.md#code-style)

##### Table of content
1. [Strict Mode](#strict-mode)
2. [Syntax](#syntax)

Strict Mode
--

#### declaring strict mode

Strict mode is declared by adding 'use strict'; to the beginning of a JavaScript or a JavaScript function.

Declared at the beginning of a JavaScript file, it has global scope (all code will execute in strict mode):
```js
'use strict';
x = 3.14;       // This will cause an error (x is not defined)
```

#### why strict mode?
Strict mode makes it easier to write 'secure' JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

Syntax
--

#### indentation

Use soft tab (4 spaces).

```js
var x = 1,
    y = 1;

if (x < y) {
    x += 10;
} else {
    x += 1;
}
```

#### Semicolon (;)

After following situations need to add a semicolon:

 * variable declaration;
 * expression;
 * `return`;
 * `throw`;
 * `break`;
 * `continue`;
 * `do-while`.

```js
/* var declaration */
var x = 1;

/* expression statement */
x++;

/* do-while */
do {
    x++;
} while (x < 10);
```

#### Spaces

The following situations do not need a space:

 1. After object's attribute name
    ```js
    /* Bad */
    var a = {
        b :1
    };
    
    /* Good */
    var a = {
        b: 1
    };
    ```
 2. After prefix or before postfix of unary operator
    ```js
    /* Bad */
    ++ x;
    y ++;
    
    /* Good */
    ++x;
    y++;
    ```
 3. After `[` and before `]` in arrays:
    ```js
    /* Bad */
    var a = [ 1, 2 ];
    
    /* Good */
    var a = [1, 2];
    ```
 4. After `(` and before `)` in oterators:
    ```js
    /* Bad */
    var a = ( 1+2 )*3;
    
    /* Good */
    var a = (1 + 2) * 3;
    ```

The following situations require a Space:

 1. Binary operators around
    ```js
    /* Bad */
    var a=1;
    
    /* Good */
    var a = 1;
    ```
 2. Before and after the signs `?` and `:` in ternary operators
    ```js
    /* Bad */
    z = x?1:2;
    
    /* Good */
    z = x ? 1 : 2;
    ```
 3. Before `{` in block of code
 4. Before following keywords: `else`, `while`, `catch`, `finally` and after following keywords: `if`, `else`, `for`, `while`, `do`, `switch`, `case`, `try`, `catch`, `finally`, `with`, `return`, `typeof`
    ```js
    if (a) {
        // Do something...
    } else {
        // Do something else...
    }
    ```
 5. After `//` in single-line comment and after `*` in multi-line comment
    ```js
    // Single-line comment
    
    /**
     * Multi-line comment
     */
    ```

#### Empty row

Following situations require Empty lines:

 1. After the variable declaration (except variable declaration at the last line of code blocks)
    ```js
    // need blank line after variable declaration
    var x = 1;

    // not need blank line when variable declaration is last expression in the current block
    if (x >= 1) {
        var y = x + 1;
    }
    ```
 2. Before comments (except comment on the first line of code block)
    ```js
    var a = 2;

    // need blank line before line comment
    a++;

    function b() {
        // not need blank line when comment is first line of block
        return a;
    }
    ```
 3. After the code block (in function calls, arrays, objects you do not need empty lines)
    ```js
    // need blank line after blocks
    for (var i = 0; i < 2; i++) {
        if (true) {
            return false;
        }

        continue;
    }
    ```
 4. End of file
