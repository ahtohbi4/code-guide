HTML
==

[↩ Code Style](https://github.com/ahtohbi4/code-style/blob/master/README.md#code-style)

##### Table of content
1. [Common](#common)
2. [Syntax](#syntax)
3. [References](#references)

Common
--

#### Blank Lines and Indentation

 * Do not add blank lines without a reason.
 * Add 4 spaces of indentation. Do not use TAB.
 * Add blank lines to separate large or logical code blocks.

```html
<!-- Bad -->
<section>

<h1>Moscow</h1>

<p>
    <strong>Moscow</strong> is the capital and the largest city of Russia with 12.2 million residents within the city limits and 16.8 million within the urban area. Moscow is one of three federal cities in Russia.
</p>

</section>

<!-- Good -->
<section>
    <h1>Moscow</h1>

    <p><strong>Moscow</strong> is the capital and the largest city of Russia with 12.2 million residents within the city limits and 16.8 million within the urban area. Moscow is one of three federal cities in Russia.</p>
</section>
```

#### Always declare the document type

And do it as the first line in your document.
```html
<!doctype html>
```

#### Specify page language

Declaring a language is important for accessibility applications (screen readers) and search engines. Language can be found in the [list](https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx).
```html
<html lang="en-US">
```

#### Always declare the character set

UTF-8 (Unicode) covers almost all of the characters and symbols in the world.
```html
<meta charset="utf-8">
```

#### Use simple syntax for linking style sheets

```html
<link rel="stylesheet" href="/path/to/styles.css">
```

#### Use simple syntax for loading external scripts

```html
<script src="/path/to/script.js">
```

#### Use other tags and attributes to provide users more opportunity

See [HTML5 layout](https://github.com/ahtohbi4/layout).

Syntax
--

#### Use lower case element names

Lowercase look cleaner and are easier to write.
```html
<!-- Bad -->
<Header>
    <A class="logo" href="//example.com/"></A>
</Header>
<!-- Good -->
<header>
    <a class="logo" href="//example.com/"></a>
</header>
```

#### Close all HTML elements

```html
<!-- Bad -->
<section>
    <p>This is a paragraph.
    <p>This is a paragraph.
</section>
<!-- Good -->
<section>
    <p>This is a paragraph.</p>
    <p>This is a paragraph.</p>
</section>
```

#### Dont close empty tags

```html
<!-- Bad -->
<meta charset="utf-8" />
<!-- Good -->
<meta charset="utf-8">
```

#### Use lowercase attribute names

```html
<!-- Bad -->
<a CLASS="link" Href="//example.com/">Link</a>
<!-- Good -->
<a class="link" href="//example.com/">Link</a>
```

#### Use duble quotation marks ("") for attribute

```html
<!-- Bad -->
<a class=logo href=//example.com/></a>
<!-- Good -->
<a class="logo" href="//example.com/"></a>
```

#### Always use attributes alt, width and height for `<img>`

Always use the alt attribute with images. It is important when the image cannot be viewed.

Always define image size. It reduces flickering because the browser can reserve space for images before they are loaded.
```html
<img src="/path/to/picture.png" alt="alt of picture" width="128" height="128">
```

#### No spaces around the equal signs

```html
<!-- Bad -->
<link rel = "stylesheet" href = "styles.css">
<!-- Good -->
<link rel="stylesheet" href="styles.css">
```

References
--

 * https://www.w3.org/html/wg/drafts/html/master/semantics.html
 * http://www.sitepoint.com/web-foundations/
