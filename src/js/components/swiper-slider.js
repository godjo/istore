var swiperBanner = new Swiper('.main-banner__container', {
  navigation: {
    nextEl: '.main-banner__button--next',
    prevEl: '.main-banner__button--prev',
  },
  breakpoints: {
    1250: {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredSlides: true,
    },
  },
});

var swiperFeatures = new Swiper('.main-features__container', {
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


var swiperContacts = new Swiper('.contacts__swiper-container', {
  direction: 'vertical',
  slidesPerView: 4,
  mousewheel: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
  touchReleaseOnEdges: true,
});


var swiperReviews = new Swiper('.reviews__container', {
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    640: {
      centeredSlides: true,
      slidesPerView: 'auto',
    },
    960: {
      slidesPerView: 2,
    },
    1250: {
      centeredSlides: true,
      slidesPerView: 3,
    },
  },
});


if ($(window).width() < 1250) {
  if (typeof swiperCatalog == 'undefined') {
    swiperCatalog = new Swiper('.catalog__swiper', {
      slidesPerView: 'auto',
    });
  }
} else {
  if (typeof swiperCatalog != 'undefined') {
    swiperCatalog.destroy();
    swiperCatalog = undefined;

    $('.swiper-wrapper').removeAttr('style');
    $('.swiper-slide').removeAttr('style');
  }
}

if ($(window).width() < 1250) {
  if (typeof swiperCheckout == 'undefined') {
    swiperCheckout = new Swiper('.checkout__swiper', {
      /* slidesPerView: 'auto', */
    });
  }
} else {
  if (typeof swiperCheckout != 'undefined') {
    swiperCheckout.destroy();
    swiperCheckout = undefined;

    $('.swiper-wrapper').removeAttr('style');
    $('.swiper-slide').removeAttr('style');
  }
}
