// Update year in footer
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Update last modified date if element exists
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
  lastModifiedElement.textContent = document.lastModified;
}
