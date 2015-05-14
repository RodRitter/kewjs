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
				return selection;
			},
			first: function() {
				return selection[0];
			},
			each: function(callback) {
				for(var i=0; i<selection.length; i++) {
					callback(selection[i]);
				}
			}
		}
	}
}

