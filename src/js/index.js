// Main js file

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
