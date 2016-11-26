// WOW
new WOW().init();

$(document).ready(function(){
	// HAMBURGUESA
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('.header__menu').slideDown(600);

		if (this.className === "hamburger hamburger--collapse") {
			$('.header__menu').slideUp(600);
		}
	});

	// SLIDER
	$('.slider').unslider({
		autoplay: 	true,
		keys: 		false,
		arrows: 	false,
		nav:		false,
		delay:		5000,	// default --> 3000
		infinite:	true
	});
});
