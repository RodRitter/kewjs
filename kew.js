(function (window) {
    var $kew = function (selector, context) {
        this.elements = (context || document).querySelectorAll(selector);
        this.length   = this.elements.length;

        return this;
    };

    $kew.prototype = {
        ready: function (callback) {
            document.addEventListener("DOMContentLoaded", callback);
        },

        each: function (callback) {
            for (var i = 0; i < this.length; i++) {
                callback(this.elements[i], i, this.elements);
            }

            return this;
        },

        attr: function (attrName, attrValue) {
            if (typeof attrName === 'string' && typeof attrValue === 'string') {
                for (var i = 0; i < this.length; i++) {
                    var attr = '';

                    if (this.elements[i].getAttribute(attrName) !== 'undefined') {
                        attr = this.elements[i].getAttribute(attrName);
                    }

                    this.elements[i].setAttribute(attrName, attr + ' ' + attrValue);
                }
            }
        },

        addClass: function (className) {
            this.each(function (element) {
                element.classList.add(className)
            });

            return this;
        },

        removeClass: function (className) {
            this.each(function (element) {
                element.classList.remove(className);
            });

            return this;
        },

        remove: function () {
            for (var i = 0; i < this.length; i++) {
                this.elements[i].parentElement.removeChild(this.elements[i]);
            }
        }
    };

    window.$kew = function (selector, context) {
        return new $kew(selector, context);
    };
})(window);
