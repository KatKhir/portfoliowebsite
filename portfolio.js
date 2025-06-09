/************************** Stjerne rotation når man scroller ****************************/

const image = document.querySelector(".rotating-image"); /* "find det billlede jeg vil rotere i min HTML" */

/* Den indeholder alt, der skal ske, når man scroller eller loader siden */
function handleScroll() {
  if (!image) return;
  const scrollY = window.scrollY;
  const rotation = scrollY % 360;
  image.style.transform = `rotate(${rotation}deg)`;
}
// Positionere elementet det givende sted ved load, så den ikke rykker sig når man begynder at scrolle (uden at elementet rotere ved load)
window.addEventListener("load", handleScroll);

// Opdaterer rotation når man scroller
window.addEventListener("scroll", handleScroll);

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
