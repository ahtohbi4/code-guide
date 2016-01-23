HTML
==

[↩ Code Style](https://github.com/ahtohbi4/code-style/blob/master/README.md#code-style)

Blank Lines and Indentation
--

 * Do not add blank lines without a reason.
 * Add 4 spaces of indentation. Do not use TAB.
 * Add blank lines to separate large or logical code blocks.

Syntax
--

#### Always declare the document type

And do it as the first line in your document.
```html
<!doctype html>
```

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

#### Always use attributes alt, width and height for ```<img>```

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
