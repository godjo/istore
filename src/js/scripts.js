$(document).ready(function () {
	//= components/swiper-slider.js
	//= components/select.js



	UIkit.util.on('.product__accordion .accordion', 'shown', function () {
		var active = $(this).find('.uk-open');
		console.log(active);

		setTimeout(function () {
			UIkit.scroll('body', {
				duration: 400,
			}).scrollTo(active);
		}, 50);
	});
});
