(function (window) {
    var $kew = function (selector, context) {
        var self = this;

        self.elements = (context || document).querySelectorAll(selector);
        self.length   = self.elements.length;

        return self;
    };

    $kew.prototype = {
        ready: function (callback) {
            document.addEventListener("DOMContentLoaded", callback);
        },

        each: function (callback) {
            var self = this;

            for (var i = 0; i < self.length; i++) {
                callback(self.elements[i], i, self.elements);
            }

            return self;
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
            var self = this;

            self.each(function (element) {
                element.classList.add(className)
            });

            return self;
        },

        removeClass: function (className) {
            var self = this;

            self.each(function (element) {
                element.classList.remove(className);
            });

            return self;
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
