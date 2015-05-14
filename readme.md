## Kew
### Lightweight alternative to jQuery

Kew is a lightweight alternative to the jQuery library. It consists of a few useful functions and doesn't have the bulk that jQuery has.

### Usage

#### Initialize kew.js

##### Include the library in your page
```javascript
    <script src="path/to/kew.js"></script>
```

##### Check if document is loaded
```javascript
    $.ready(function(){
        // code to be executed after document has loaded
    });
```

#### 1. Query Selector
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
