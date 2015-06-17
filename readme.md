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

### `$kew.addClass()`

Add a class to each selected elements.

**Example**

```javascript
$kew('#foo').addClass('bar');
```

### `$kew.removeClass()`

Remove a class from each selected elements.

**Example**

```javascript
$kew('#foo').removeClass('bar');
```

### `$kew.removeElements()`

Removes selected elements from the document.

```javascript
$kew('#foo').removeElements();
```

## Contributor Setup
If you would like to contribute and you will make modifications to `kew.js`, then you will need to make sure you have NodeJS to install. You can get it [here](https://nodejs.org/).
```javascript
C:\> cd path/to/project/kewjs
C:\path\to\project\kewjs> grunt
Running "uglify:build" (uglify) task

Done, without errors.

C:\path\to\project\kewjs>
```