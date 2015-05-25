(function(window){
	var $kew = function(selector, context) {
		if ( window === this ) {
            return new $kew(selector);
        }
		var els = (context || document).querySelectorAll(selector);
		this.elements = els;
		this.length = els.length;
		return this;
	}

	$kew.prototype = {
		ready: function(callback){
			document.addEventListener("DOMContentLoaded", callback);
		},
		each: function(callback) {
			for(var i=0; i<this.length; i++) {
				callback(this.elements[i]);
			}
		},
		attr: function(attrName, attrValue) {
			if(typeof attrName === 'string' && typeof attrValue === 'string') {
				for (var i = 0; i < this.length; i++) {
					var attr = this.elements[i].getAttribute(attrName) === null ? '' : this.elements[i].getAttribute(attrName);
					this.elements[i].setAttribute(attrName, attr+' '+attrValue);
				}
			}
		},
		class: function(className) {
				this.attr('class', className);
		},
		remove: function() {
			for (var i = 0; i < this.length; i++) {
				this.elements[i].parentElement.removeChild(this.elements[i]);
			}
		}
	}

	window.$kew = $kew;
})(typeof window != 'undefined' ? window : undefined);
