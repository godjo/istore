$(document).ready(function () {
	//= components/swiper-slider.js
	//= components/select.js
	//= components/calc.js

	/* Adds scroll for accordion on page Product */
	UIkit.util.on('.accordion', 'shown', function () {
		var li_open = $(this).find('.uk-open');
		var li_content = $(li_open).find('.uk-accordion-content');
		var top_margin = $('.header__top').is(':visible') ? '52' : '63';
		if ((li_content).is(':visible')) {
			setTimeout(function () {
				$('html, body').animate({
					scrollTop: li_open.offset().top - top_margin
				}, 600);

			}, 50);
		}
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

	$(".header__menu-button").click(function () {
		$(this).toggleClass('open');
	});

	/* Удалить при натяжке!!! */
	if (localStorage.selected_city == undefined) {
		$('.header__city').show();
		localStorage.selected_city = true;
	}

	/* Adds autofocus for search input mobile */
	/* 	UIkit.util.on('#popupSearch', 'shown', function () {
			$('#searchInputModal').attr('autofocus', '');
		}); */
});
