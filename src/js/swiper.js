import Swiper from "swiper";
import "../../node_modules/swiper/css/swiper.min.css"

const swiper = new Swiper('.slider', {
  slidesPerView: 1,
  updateOnWindowResize: true,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__control--next',
    prevEl: '.slider__control--prev',
  }
});

const swiperSmall = new Swiper('.small-slider__container', {
  slidesPerView: 1,
  spaceBetween: 20,
  updateOnWindowResize: true,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    570: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.small-slider__control--next',
    prevEl: '.small-slider__control--prev',
  }
});
