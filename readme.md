# KewJS
### Lightweight alternative to jQuery selectors & basic utilities

:arrow_down: [Download](https://raw.githubusercontent.com/RodRitter/kewjs/master/dist/kew.min.js)

### Usage

#### Initialize kew.js

Include the library in your page
```javascript
    <script src="path/to/kew.min.js"></script>
```

#### 1. Document ready
```javascript
    $.ready(function(){
        // code to be executed after document has loaded
    });
```

#### 2. $.find() Selector
You can select an element by using a CSS type selection.

##### Examples
```javascript
    $.find('div');
    $.find('.foo div');
    $.find('#foo.bar');
```

#### 3. Basic Selection Methods

* `list()`
    - returns an array of elements
* `first()`
    - returns the first element
* `each(function(el))`
    - loops through the array of elements

##### Examples

###### Using `list()`
```javascript
    var allDivs = $.find('div').list();
    allDivs[0].style.color = 'blue';
    allDivs[1].style.color = 'red';
```

###### Using `first()`
```javascript  
    var logoEl = $.find('#logo').first();
    logoEl.style.border = '1px solid black';
```

###### Using `each()`
```javascript
    $.find('div').each(function(el) {
        el.style.color = 'red';
    });
```
#### 4. Attributes, Classes & ID's

Easily add attributes to elements
* `.attr(attributeName, attributeValue)`
    - adds attributes to elements

##### Examples

###### Using `attr()`
```javascript
    $.find('.foo').attr('class', 'newClass');
```

#### 5. Removing Elements
Remove element with this handy function
* `remove(cmd)`
    - cmd is replaced with `all`, `first` or `last` - or an integer for the zero-based index

##### Examples

###### Using `remove()`
```javascript
    $.find('.foo').remove('all'); // removes all .foo elements
    $.find('.foo').remove('first'); // removes the first .foo element
    $.find('.foo').remove('last'); // removes the last .foo element
    $.find('.foo').remove(2); // remove the 3rd .foo element
    $.find('.foo').remove(0); // remove the 1st .foo element
    $.find('.foo').remove(8); // remove the 9th .foo element
```
