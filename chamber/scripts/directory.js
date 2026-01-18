const membersContainer = document.getElementById("members");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership level-${member.membership}">
        Membership Level: ${member.membership}
      </p>
    `;

    membersContainer.appendChild(card);
  });
}

/* GRID VIEW */
gridBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid-view");
  membersContainer.classList.remove("list-view");

  document.querySelectorAll(".member-card img").forEach(img => {
    img.style.display = "block";
  });
});

/* LIST VIEW (NO IMAGES) */
listBtn.addEventListener("click", () => {
  membersContainer.classList.add("list-view");
  membersContainer.classList.remove("grid-view");

  document.querySelectorAll(".member-card img").forEach(img => {
    img.style.display = "none";
  });
});

getMembers();
