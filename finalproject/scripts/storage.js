const form = document.getElementById("suggestForm");
const message = document.getElementById("formMessage");

const STORAGE_KEY = "suggestedGames";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newGame = {
    title: form.title.value.trim(),
    genre: form.genre.value.trim(),
    platform: form.platform.value,
    year: form.year.value,
    description: form.description.value.trim(),
  };

  if (!newGame.title || !newGame.genre || !newGame.platform || !newGame.year || !newGame.description) {
    message.textContent = "Please complete all fields.";
    message.style.color = "red";
    return;
  }

  let storedGames = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  storedGames.push(newGame);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedGames));

  message.textContent = "Thank you! Your game suggestion has been saved.";
  message.style.color = "green";

  // Redirigir a thankyou.html después de 1 segundo
  setTimeout(() => {
    window.location.href = "thankyou.html";
  }, 1000);
});
