const spotlightContainer = document.querySelector('#spotlight-container');

async function loadSpotlights() {
  try {
    const response = await fetch('https://chissgan.github.io/wdd231/data/members.json');
    if (!response.ok) throw Error('Could not fetch members.json');
    
    const members = await response.json();
    const filtered = members.filter(member => member.membership === "Gold" || member.membership === "Silver");

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = '';

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <img src="${member.logo}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership:</strong> ${member.membership}</p>
      `;
      spotlightContainer.appendChild(card);
    });

  } catch (error) {
    console.log(error);
  }
}

loadSpotlights();