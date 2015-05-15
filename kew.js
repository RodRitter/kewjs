var $ = {
	ready: function(callback){
		var readyCheck = setInterval(function(){
			if(document.readyState == 'complete' || document.readyState == 'interactive') {
				callback();
				clearInterval(readyCheck);
			}
		}, 50);
	},
	get: function(selector, context) {
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
			}


		}
	}
}
