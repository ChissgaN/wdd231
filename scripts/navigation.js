const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav.nav-menu ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Wayfinding
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav.nav-menu a");

navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (
    linkPage === currentPage ||
    (linkPage === "index.html" && currentPage === "")
  ) {
    link.classList.add("active");
  }
});
