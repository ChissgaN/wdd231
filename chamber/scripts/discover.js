import { places } from "../data/discover.mjs";

const cardsContainer = document.querySelector("#discover-cards");
const visitMessage = document.querySelector("#visit-message");

places.forEach((place, index) => {
  const card = document.createElement("section");
  card.classList.add("card");
  card.style.gridArea = `card${index + 1}`;

  const h2 = document.createElement("h2");
  h2.textContent = place.name;

  const img = document.createElement("img");
  img.src = `images/${place.image}`;
  img.alt = place.name;
  img.loading = "lazy";
  img.width = 300;
  img.height = 200;

  const address = document.createElement("p");
  address.textContent = place.address;

  const description = document.createElement("p");
  description.textContent = place.description;

  const learnMoreBtn = document.createElement("button");
  learnMoreBtn.textContent = "Learn More";
  learnMoreBtn.classList.add("learn-more-btn");
  learnMoreBtn.setAttribute("aria-label", `Learn more about ${place.name}`);

  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(address);
  card.appendChild(description);
  card.appendChild(learnMoreBtn);

  cardsContainer.appendChild(card);
});

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysBetween = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (daysBetween < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
