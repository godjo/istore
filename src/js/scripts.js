$(document).ready(function () {
	//= components/swiper-slider.js
	//= components/select.js
	//= components/calc.js
	//= components/presents.js

	/* Adds scroll for accordion on page Product */
	UIkit.util.on('.accordion--scroll', 'shown', function () {
		var li_open = $(this).find('.uk-open');
		var li_content = $(li_open).find('.uk-accordion-content');
		var top_margin = $('.header__top').is(':visible') ? '52' : '63';
		if ((li_content).is(':visible')) {
			setTimeout(function () {
				$('html, body').animate({
					scrollTop: li_open.offset().top - top_margin
				}, 200);

			}, 50);
		}
	});

	/* adds class for body on click search */
	$("body").on('focus', '#searchInput', function () {
		$('body').addClass('search--opened');
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

	/* Кнопка Меню для мобильных устройств */
	$(document).on('click', '.header__menu-button', function () {
		if ($('#menuMobile').hasClass('uk-open')) {
			$(this).addClass('open');
		} else {
			$(this).removeClass('open');
		}

		$('.search__mobile, .cart__mobile').on('click', function () {
			$(".header__menu-button").removeClass('open');
		})
	})

	$('#menuMobile').not('.uk-open').mouseleave(function () {
		$(".header__menu-button").removeClass('open');
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

	/* scroll top */

	var btn = $('.scroll-top');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '300');
	});

	$('.product__link').on('click', function () {
		$('.product__reviews a')[0].click();
	})
});
