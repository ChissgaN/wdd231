document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toISOString();

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const npModal = document.getElementById("npModal");
  const bronzeModal = document.getElementById("bronzeModal");
  const silverModal = document.getElementById("silverModal");
  const goldModal = document.getElementById("goldModal");

  document.getElementById("npBtn").addEventListener("click", () => npModal.showModal());
  document.getElementById("bronzeBtn").addEventListener("click", () => bronzeModal.showModal());
  document.getElementById("silverBtn").addEventListener("click", () => silverModal.showModal());
  document.getElementById("goldBtn").addEventListener("click", () => goldModal.showModal());

  document.querySelectorAll(".modal-close").forEach(button => {
    button.addEventListener("click", () => {
      button.closest("dialog").close();
    });
  });
});
