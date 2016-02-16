CSS
==

[↩ Code Style](https://github.com/ahtohbi4/code-style/blob/master/README.md#code-style)

##### Table of content
1. [Syntax](#syntax)
2. [Naming of selectors (BEM)](#naming-of-selectors-bem)
3. [Property order](#property-order)

Syntax
--

#### Separate selectors and declarations by new lines

Always start a new line for each selector and declaration.
```css
/* Bad */
.bad-class-1, .bad-class-2,.bad-class-3 {
    margin-bottom: 12em;color:#ebc;
}
/* Good */
.bad-class-1,
.bad-class-2,
.bad-class-3 {
    margin-bottom: 12em;
    color: #ebc;
}
```

#### Use a space between the last selector and the declaration block

Always use a single space between the last selector and the opening brace that begins the declaration block.

The opening brace should be on the same line as the last selector in a given rule.
```css
/* Bad, not recommended: missing space */
.bad-class{
    margin-top: 1em;
}
/* Bad, not recommended: unnecessary line break */
.bad-class
{
    margin-top: 1em;
}
/* Good */
.good-class {
    margin-top: 1em;
}
```

#### Use a space after a property name's colon

Always use a single space between property and value (but no space between property and colon) for consistency reasons.
```css
/* Bad */
.bad-class {
    color:#ebc;
}
/* Good */
.good-class {
    color: #ebc;
}
```

#### Use a semicolon after every declaration

End every declaration with a semicolon for consistency and extensibility reasons.
```css
/* Bad */
.bad-class {
    margin: 0;
    padding: 0
}
/* Good */
.good-class {
    margin: 0;
    padding: 0;
}
```

#### Use shorthand properties

CSS offers a variety of [shorthand](http://www.w3.org/TR/CSS21/about.html#shorthand) properties (like font) that should be used whenever possible, even in cases where only one value is explicitly set.

Using shorthand properties is useful for code efficiency and understandability.
```css
/* Bad */
.bad-class {
    border-top-style: none;
    font-family: palatino, georgia, serif;
    font-size: 100%;
    line-height: 1.6;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;
}
/* Good */
.good-class {
    border-top: 0;
    font: 100%/1.6 palatino, georgia, serif;
    padding: 0 1em 2em;
}
```

#### Omit unit specification after '0' values

Do not use units after 0 values unless they are required.
```css
/* Bad */
.bad-class {
    margin: 0px;
    padding: 0em;
}
/* Good */
.good-class {
    margin: 0;
    padding: 0;
}
```

#### Omit leading '0's in values

Do not use put 0s in front of values or lengths between -1 and 1.
```css
/* Bad */
.bad-class {
    font-size: 0.8em;
}
/* Good */
.good-class {
    font-size: .8em;
}
```

#### Use 3 character hexadecimal notation where possible

For color values that permit it, 3 character hexadecimal notation is shorter and more succinct.
```css
/* Bad */
.bad-class {
    color: #eebbcc;
}
/* Good */
.good-class {
    color: #ebc;
}
```

#### Use single quotation marks for attribute selectors and property values

Use single ('') rather than double ("") quotation marks for attribute selectors or property values. Do not use quotation marks in URI values (url()).
```css
/* Bad */
.bad-class {
    background: url('/img/picture.png') 0 0 no-repeat;
    font-family: "open sans", arial, sans-serif;
}
/* Good */
.good-class {
    background: url(/img/picture.png) 0 0 no-repeat;
    font-family: 'open sans', arial, sans-serif;
}
```

#### Never use !important

Do not fix problems with !important.
```css
/* Bad */
.bad-class {
    width: 50% !important;
}
```

Selectors
--

#### Never use '*' (universal selector)
```css
/* Bad */
* {
    display: flex;
}
```

#### Avoid use ID selectors
```css
/* Bad */
#bad-selector {
    position: relative;
    top: 9px;;
}
```

#### Avoid use nested selectors
```css
/* Bad */
.parent-class .child-class {
    color: red;
}
```

Exceptions are the elements in BEM notation nested in blocks.
```css
/* Acceptably */
.some-block {
    display: box;
}
.some-block__element {
    color: #777;
}
.some-block_modificator_some .some-block__element {
    color: #f30;
}
```

Naming of selectors (BEM)
--

Property order
--
