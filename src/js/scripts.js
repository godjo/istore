$(document).ready(function () {
	//= components/swiper-slider.js
	//= components/select.js


	/* Adds scroll for accordion on page Product */
	UIkit.util.on('.product__accordion .accordion', 'shown', function () {
		setTimeout(function () {
			$('html, body').animate({
				scrollTop: $('.product__accordion .uk-open').offset().top - 52
			}, 600);
		}, 50);
	});

});
