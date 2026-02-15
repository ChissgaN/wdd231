// Platform information data
const platformsData = {
  ps5: {
    title: "PlayStation 5",
    image: "images/main/ps5.webp",
    description: "Experience next-gen gaming with stunning graphics and immersive gameplay on the PlayStation 5.",
    features: [
      "Ultra HD Blu-ray with 4K resolution",
      "SSD for lightning-fast load times",
      "DualSense controller with haptic feedback",
    ]
  },
  xbox: {
    title: "Xbox Series X/S",
    image: "images/main/xbox.webp",
    description: "Play on the most powerful and fastest Xbox ever with Game Pass and incredible performance.",
    features: [
      "12 TFLOPS performance (Series X)",
      "Velocity Architecture for fast loading",
      "Smart Delivery for next-gen versions",
    ]
  },
  switch: {
    title: "Nintendo Switch",
    image: "images/main/switch.webp",
    description: "Play anywhere, anytime with the hybrid console that works in handheld, docked, and tabletop modes.",
    features: [
      "Hybrid console - portable and docked",
      "Exclusive Nintendo franchises",
      "Local multiplayer capabilities",
    ]
  },
  pc: {
    title: "PC",
    image: "images/main/pc.webp",
    description: "Unlimited possibilities with gaming PCs offering unparalleled power and customization.",
    features: [
      "Customizable hardware configurations",
      "High refresh rates and ultra-high resolutions",
      "Largest game library with Steam and more",
    ]
  }
};

// Get modal elements
const modal = document.getElementById("platformModal");
const modalClose = document.querySelector(".modal-close");
const gameCards = document.querySelectorAll(".game-card");

// Open modal with platform info
function openPlatformModal(platform) {
  const data = platformsData[platform];
  
  if (!data) return;

  // Populate modal content
  document.getElementById("modalImage").src = data.image;
  document.getElementById("modalImage").alt = data.title;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDescription").textContent = data.description;

  // Create features list
  const featuresContainer = document.getElementById("modalFeatures");
  featuresContainer.innerHTML = "";
  
  const featuresList = document.createElement("ul");
  featuresList.className = "features-list";
  
  data.features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });
  
  featuresContainer.appendChild(featuresList);

  // Show modal
  modal.showModal();
}

// Close modal
function closePlatformModal() {
  modal.close();
}

// Add click listeners to cards
gameCards.forEach(card => {
  card.addEventListener("click", () => {
    const platform = card.dataset.platform;
    openPlatformModal(platform);
  });
});

// Close button listener
modalClose.addEventListener("click", closePlatformModal);

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closePlatformModal();
  }
});
