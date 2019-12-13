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

	/* adds class for body on click search */
	$("body").on('focus', '#searchInput', function () {
		$('body').addClass('search--opened');
	});

	$("body").on('blur', '#searchInput', function () {
		$('body').removeClass('search--opened');
	});

	/* clear val for search input */
	$(document).ready(function () {
		$('.search__close').on('click', function () {
			$('#searchInput').val('');
		})

		$('body').on('click', '.search__clear', function () {
			$(this).prev().val('');
		})
	})

});
