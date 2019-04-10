$(window).resize(function() {
	var width = $(window).width();
	if(width > 1024) {
		$(".navbar-toggle-button").css({"display" : "none"});
		$('.navbar-items').css({"display" : "block"});
	}
	else {
		$("#toggle-btn").css({"display" : "inline"});
		$('.navbar-items').css({"display" : "none"});
	}
});

$("#toggle-btn").click(function(){
	$(".navbar-items").slideToggle();
});