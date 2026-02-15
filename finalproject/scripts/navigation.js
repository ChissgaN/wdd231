// Mobile menu toggle
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const navList = navigation.querySelector("ul");
    if (navList) {
      navList.classList.toggle("show");
    }
  });
}

// Active page highlighting
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
