const gamesContainer = document.querySelector("#games-container");
const platformFilter = document.querySelector("#platformFilter");
const gameModal = document.getElementById("gameModal");
const modalCloseBtn = document.querySelector(".modal-close-btn");

let gamesList = [];

const dataURL = "data/games.json"; 

async function getGames() {
  try {
    const response = await fetch(dataURL);
    const data = await response.json();
    gamesList = data.games;
    displayGames(gamesList);
  } catch (error) {
    console.error("Error loading game data:", error);
  }
}

function displayGames(games) {
  gamesContainer.innerHTML = "";

  games.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    const img = document.createElement("img");
    img.src = `images/games/${game.image}`;
    img.alt = game.title;
    img.loading = "lazy";

    const title = document.createElement("h3");
    title.textContent = game.title;

    const genre = document.createElement("p");
    genre.textContent = `Genre: ${game.genre}`;

    const platform = document.createElement("p");
    platform.textContent = `Platform: ${game.platform}`;

    const year = document.createElement("p");
    year.textContent = `Release Year: ${game.year}`;

    const button = document.createElement("button");
    button.textContent = "View Details";

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      openGameModal(game);
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(platform);
    card.appendChild(year);
    card.appendChild(button);

    gamesContainer.appendChild(card);
  });
}

function openGameModal(game) {
  document.getElementById("modalGameImage").src = `images/games/${game.image}`;
  document.getElementById("modalGameImage").alt = game.title;
  document.getElementById("modalGameTitle").textContent = game.title;
  document.getElementById("modalGameGenre").textContent = game.genre;
  document.getElementById("modalGamePlatform").textContent = game.platform;
  document.getElementById("modalGameYear").textContent = game.year;
  document.getElementById("modalGameId").textContent = `#${game.id}`;
  document.getElementById("modalGameDescription").textContent = game.description;
  
  gameModal.showModal();
}

function closeGameModal() {
  gameModal.close();
}

// Close button listener
modalCloseBtn.addEventListener("click", closeGameModal);

// Close modal when clicking outside
gameModal.addEventListener("click", (e) => {
  if (e.target === gameModal) {
    closeGameModal();
  }
});

platformFilter.addEventListener("change", () => {
  const selectedPlatform = platformFilter.value;

  if (selectedPlatform === "all") {
    displayGames(gamesList);
  } else {
    const filteredGames = gamesList.filter(
      game => game.platform === selectedPlatform
    );
    displayGames(filteredGames);
  }
});

getGames();