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
 * ```return```;
 * ```throw```;
 * ```break```;
 * ```continue```;
 * ```do-while```.

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
 2. After prefix or before postfix of unary operator:
```js
/* Bad */
++ x;
y ++;

/* Good */
++x;
y++;
```
 3. After ```[``` and before ```]``` in arrays:
```js
/* Bad */
var a = [ 1, 2 ];

/* Good */
var a = [1, 2];
```
 4. After ```(``` and before ```)``` in oterators:
```js
/* Bad */
var a = ( 1+2 )*3;

/* Good */
var a = (1 + 2) * 3;
```
