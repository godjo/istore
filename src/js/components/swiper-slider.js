var swiperBanner = new Swiper('.main-banner__container', {
  navigation: {
    nextEl: '.main-banner__button--next',
    prevEl: '.main-banner__button--prev',
  },
  breakpoints: {
    1300: {
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
    1300: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$(document).ready(function () {
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
    1300: {
      centeredSlides: true,
      slidesPerView: 3,
    },
  },
});
