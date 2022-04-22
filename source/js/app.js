import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock')
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}
const submenu = document.querySelector('.submenu-wrap');
submenu.addEventListener("click", function (e) {
  submenu.firstElementChild.classList.toggle('active');
});




function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.block__title-name');

for (let elm of elements) {
  observer.observe(elm);
}