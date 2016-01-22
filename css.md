CSS
==

[↩ Code Style](https://github.com/ahtohbi4/code-style/blob/master/README.md#code-style)

##### Table of content
1. [Syntax](#syntax)
2. Naming of selectors
3. Sequence of properties

Syntax
--

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

Naming of selectors
--

Sequence of properties
--
