var bypassSvdPaywall = function(){
	function init() {
		jQuery('<div></div>').appendTo('#article-content').load(document.URL + ' #article-content');
		jQuery(window).unbind();
		jQuery("#page").css("height","auto");
		jQuery(".svd_pw_alert_box").animate({
			top: -500
		}, 500, function() {
			jQuery("#svd_pw_alert").hide();
			jQuery("#svd_pw_curtain").hide();
			jQuery("body").removeClass("svd_pw_freeze");
		});
	}
	return {
		init: init
	};
}();

bypassSvdPaywall.init();