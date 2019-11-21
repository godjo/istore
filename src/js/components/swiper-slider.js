var swiperBanner = new Swiper('.main-banner__container', {
  loop: true,
  navigation: {
    nextEl: '.main-banner__button--next',
    prevEl: '.main-banner__button--prev',
  },
  breakpoints: {
    1250: {
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
    var swiperCatalog = new Swiper('.catalog__swiper', {
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
    var swiperCheckout = new Swiper('.checkout__swiper', {
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

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: 'vertical',
  breakpoints: {
    640: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 8,
    }
  },
});
var galleryTop = new Swiper('.gallery-top', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
  thumbs: {
    swiper: galleryThumbs
  }
});

var swiperPopupMaps = new Swiper('.popup-maps__swiper-container', {
  direction: 'vertical',
  slidesPerView: 5,
  mousewheel: true,
  /* scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  }, */
  touchReleaseOnEdges: true,
  breakpoints: {
    1250: {
      direction: 'horizontal',
      slidesPerView: 'auto',
    },
  },
});
UIkit.util.on('#popupMaps', 'show', function () {
  swiperPopupMaps.update();
})
