var $ = {
	ready: function(callback){
		document.addEventListener("DOMContentLoaded", callback());
	},
	find: function(selector, context) {
		var selection = (context || document).querySelectorAll(selector);
		return {
			list: function() {
				console.log(selection);
				return selection;
			},
			first: function(){
				return selection[0];
			},
			each: function(callback) {
				for(var i=0; i<selection.length; i++) {
					callback(selection[i]);
				}
			},
			attr: function(attrName, attrValue) {
				if(typeof attrName === 'string' && typeof attrValue === 'string') {
					for (var i = 0; i < selection.length; i++) {
						var attr = selection[i].getAttribute(attrName) === null ? '' : selection[i].getAttribute(attrName);
						selection[i].setAttribute(attrName, attr+' '+attrValue);
					}
				}
			},
			remove: function(which) {
				if(typeof which == 'number') {
					selection[Math.floor(which)].parentElement.removeChild(selection[Math.floor(which)])
				} else {
					switch(which) {
						case 'all':
							for (var i = 0; i < selection.length; i++) {
								selection[i].parentElement.removeChild(selection[i]);
							}
							break;
						case 'first':
							selection[0].parentElement.removeChild(selection[0]);
							break;
						case 'last':
							selection[selection.length-1].parentElement.removeChild(selection[selection.length-1]);
							break;
						default:
							console.warning('Kew Warning: No argument specified to remove() function. Applying to ALL selected elements.');
							for (var i = 0; i < selection.length; i++) {
								selection[i].parentElement.removeChild(selection[i]);
							}
					}
				}
			}
		}
	}
}
