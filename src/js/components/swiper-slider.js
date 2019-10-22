var swiperBanner = new Swiper('.main-banner__container', {
  navigation: {
    nextEl: '.main-banner__button--next',
    prevEl: '.main-banner__button--prev',
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
  });
});
