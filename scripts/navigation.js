const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav.nav-menu ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});