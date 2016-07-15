CSS
==

[↩ Code Style](./README.md#code-style)

##### Table of content
1. [Syntax](#syntax)
2. [Naming of selectors (BEM)](#naming-of-selectors-bem)
3. [Property order](#property-order)
4. [References](#references)

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

For color values that permit it, 3 characters hexadecimal notation is shorter and more succinct.
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

Use single (`''`) rather than double (`""`) quotation marks for attribute selectors or property values. Do not use quotation marks in URI values (url()).
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

Do not fix problems with `!important`.
```css
/* Bad */
.bad-class {
    width: 50% !important;
}
```

Selectors
--

#### Never use the universal selector (`*`)
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
    top: 9px;
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

Source: https://en.bem.info/method/naming-convention/

BEM, meaning Block, Element, Modifier, is a front-end methodology coined by developers working at Yandex.

#### CSS selector naming convention
 * Names of BEM entities are written using numbers and lowercase Latin characters.
 * Individual words within names are separated by a hyphen (`-`).
 * Information about the names of blocks, elements, and modifiers is stored using CSS classes.

#### Block name

A block name follows the block-name scheme and defines a namespace for elements and modifiers.

Different prefixes can sometimes be added to block names. Our experience of using prefixes is told in detail in the article The History of BEM.

Example: `menu`, `lang-switcher`.

```css
.menu {
    color: red;
}
```

#### Element name

The namespace defined by the name of a block identifies an element as belonging to the block. An element name is delimited by a double underscore (`__`).

The full name of an element is created using this scheme: `block-name__elem-name`.

If a block has several identical elements, such as in the case of menu items, all of them will have the same name `menu__item`.

##### Never use elements within elements

```css
/* Bad */
.block-name__elem1__elem2 {}

/* Good */
.block-name__elem1 {}
.block-name__elem2 {}
```

[Why does BEM not recommend using elements within elements?](https://en.bem.info/faq/#why-does-bem-not-recommend-using-elements-within-elements-block__elem1__elem2)

#### Modifier name

The namespace defined by the name of a block identifies a modifier as belonging to that block or its element. A modifier name is delimited by a single underscore (`_`).

The full name of a modifier is created using the scheme:

 * For Boolean modifiers — `owner-name_mod-name`.
 * For key-value type modifiers — `owner-name_mod-name_mod-val`.

#### Block modifier
 
  * **Boolean modifier.** The value of such a modifier is not specified. The full name is created using the scheme: `block-name_mod-name`.

    ```css
    .menu_hidden {
        position: relative;
    }
    ```

  * **Key-value type modifier.** The value of a modifier is separated from its name by a single underscore (`_`). The full name is created using the scheme: `block-name_mod-name_mod-val`.

    ```css
    .menu_theme_morning-forest {
        background-color: green;
    }
    ```

#### Element modifier

 * **Boolean modifier.** The value of such a modifier is not specified. The full name is created using this scheme: `block-name__elem-name_mod-name`.

    ```css
    .menu_hidden {
        position: relative;
    }
    ```

 * **Key-value type modifier.** The value of a modifier is separated from its name by a single underscore (`_`). The full name is created using the scheme: `block-name__elem-name_mod-name_mod-val`.

    ```css
    .menu__item_type_radio {
        color: #333;
    }
    ```

Property order
--

References
--

 * [Let’s Write Beautiful CSS Comments](https://seesparkbox.com/foundry/lets_write_beautiful_css_comments)
