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
