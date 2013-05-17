var bypassSvdPaywall = function(){
	function init() {
		var pattern = /svd_pw_\d/i;
		for (var methods in window) {
			var match = methods.match(pattern);
			if(match) {
				window[methods]();
			}
		}
	}
	return {
		init: init
	};
}();

bypassSvdPaywall.init();