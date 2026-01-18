const year = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;
