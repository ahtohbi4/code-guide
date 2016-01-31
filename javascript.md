JavaScript
==

[↩ Code Style](https://github.com/ahtohbi4/code-style/blob/master/README.md#code-style)

##### Table of content
1. [Syntax](#syntax)

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

#### Semicolon ';'

After following situations need to add a semicolon:

 * Variable declaration
 * expression
 * ```return```
 * ```throw```
 * ```break```
 * ```continue```
 * ```do-while```

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
