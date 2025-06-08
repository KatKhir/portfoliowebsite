/************************** Stjerne rotation når man scroller ****************************/
const image = document.querySelector(".rotating-image");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotation = scrollY % 360;
  image.style.transform = `rotate(${rotation}deg)`;
});

/******************************** MENU ***********************************/
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}
