/************************** Stjerne rotation når man scroller ****************************/
const image = document.querySelector(".rotating-image");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotation = scrollY % 360;
  image.style.transform = `rotate(${rotation}deg)`;
});
