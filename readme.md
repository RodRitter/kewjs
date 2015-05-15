# KewJS
### Lightweight alternative to jQuery selectors

### Usage

:arrow_down: [Download](https://raw.githubusercontent.com/RodRitter/kewjs/master/dist/kew.min.js)

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

#### 2. Query Selector
```javascript
    $.get('css selector').function();
```
`$.get()` has a few functions:
* `list()`
    - returns an array of elements
* `first()`
    - returns the first element
* `each(function(el))`
    - loops through the array of elements

##### Examples

###### Using `list()`
```javascript
    var allDivs = $.get('div').list();
    allDivs[0].style.color = 'blue';
    allDivs[1].style.color = 'red';
```

###### Using `first()`
```javascript  
    var logoEl = $.get('#logo').first();
    logoEl.style.border = '1px solid black';
```

###### Using `each()`
```javascript
    $.get('div').each(function(el) {
        el.style.color = 'red';
    });
```
#### 3. Attributes, Classes & ID's

Easily add attributes to elements
* `.attr(attributeName, attributeValue)`
    - adds attributes to elements

##### Examples

###### Using `attr()`
```javascript
    $.get('.foo').attr('class', 'newClass');
```

#### 4. Removing Elements
Remove element with this handy function
* `remove(cmd)`
    - cmd is replaced with `all`, `first` or 'last' or an integer for the zero-based index

##### Examples

###### Using `remove()`
```javascript
    $.get('.foo').remove('all'); // removes all elements
    $.get('.foo').remove('first'); // removes the first element
    $.get('.foo').remove('last'); // removes the last element
    $.get('.foo').remove(2); // remove the 3rd element
    $.get('.foo').remove(0); // remove the 1st element
    $.get('.foo').remove(8); // remove the 9th element
```
