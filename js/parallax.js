(function() {
	
	// Controls parallax image scrolling above "About (How it Works)" and "Contact" sections
	//
	sya.parallax = function() {
		
		var scrolled = $(window).scrollTop();
		
		$(".parallax > img.parallax-about").css("top", -(scrolled * 0.2) + "px");
		$(".parallax > img.parallax-contact").css("top", -(scrolled * 0.2) + 462 + "px");
	};
	
	// "462" above was calculated to account for the contact image's location further down the page
	
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	
	if (!isiPad) {
		
		$(window).scroll(function() {
			
			if ($(this).width() > 1000) {
				sya.parallax();
			}
			
			else {
				$(".parallax > img").css("top", "0px");
			}
			
		});
		
		$(window).resize(function() {
			if ($(this).width() > 1000) $(".parallax > img").css("top", "0px");
		});
		
	} // End isiPad check
	
})();