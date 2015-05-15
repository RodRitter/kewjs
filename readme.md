# KewJS 
### Lightweight alternative to jQuery selectors

### Usage

Download library (`dist/kew.min.js`)

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

```javascript
    // list()
    var allDivs = $.get('div').list();
    
    // first()
    var logoEl = $.get('#logo').first();

    // each()
    $.get('div').each(function(el) {
        el.style.color = 'red';
    });

```
