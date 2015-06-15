# KewJS

Lightweight alternative to jQuery selectors & basic utilities

* :arrow_down: [Download](https://raw.githubusercontent.com/RodRitter/kewjs/master/dist/kew.min.js)

## Usage

1. Include the library in your page `<script src="path/to/kew.min.js"></script>`

## Documentation

### `$kew().ready()`

Execute a callback when the DOM is ready.

**Example**

```javascript
    $kew().ready(function(){
        // code to be executed after document has loaded
    });
```

### `$kew()`

Select elements based on a CSS selector.

**Example**

```javascript
    $kew('div');
    $kew('.foo div');
    $kew('#foo.bar');
```

### `$kew.each()`

Execute a callback for each element.

**Example**

```javascript
$kew('#foo').each(function(el) {
    console.log(el.innerHTML);
});
```

### `$kew.attr()`

Adds an attribute to all selected elements.

**Example**

```javascript
$kew('#foo').attr('data-custom', 'myValue');
// result: <div id="foo" data-custom="myValue"></div>
```

### `$kew.class()`

Add a class to an element (alias of `$kew.attr()`);

**Example**

```javascript
$kew('#foo').class('bar');
// result: <div id="foo" class="bar"></div>
```

### `$kew.remove()`

Removes selected elements from the document.

```javascript
$kew('#foo').remove();
```

## Install

1. Install NodeJS
2. `npm install`
