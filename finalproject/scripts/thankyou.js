// Obtener el último juego sugerido del localStorage
const STORAGE_KEY = "suggestedGames";
const storedGames = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

if (storedGames.length > 0) {
  const lastGame = storedGames[storedGames.length - 1];
  document.getElementById("title").textContent = lastGame.title || "N/A";
  document.getElementById("genre").textContent = lastGame.genre || "N/A";
  document.getElementById("platform").textContent = lastGame.platform || "N/A";
  document.getElementById("year").textContent = lastGame.year || "N/A";
  document.getElementById("description").textContent = lastGame.description || "N/A";
}

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
