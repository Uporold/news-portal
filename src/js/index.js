// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

/*import Swiper from "swiper";

const swiper = new Swiper('.slider', {
  slidesPerView: 1,
  updateOnWindowResize: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});*/

const mainMenu = document.querySelector(`.main-menu`);
const sideBar = mainMenu.querySelector(`.main-menu__sidebar`);
const openButton = mainMenu.querySelector(`.main-menu__button--color-orange`);
const closeButton = mainMenu.querySelector(`.main-menu__button--cross`);

mainMenu.classList.remove(`main-menu--no-js`);


openButton.addEventListener(`click`, () => {
  sideBar.classList.add(`main-menu__sidebar--active`);
});

closeButton.addEventListener(`click`, () => {
  sideBar.classList.remove(`main-menu__sidebar--active`);
});
