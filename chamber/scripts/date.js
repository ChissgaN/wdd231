// Set current year in footer
const yearSpan = document.querySelector("#year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Set last modified date
const lastModifiedParagraph = document.querySelector("#lastModified");
if (lastModifiedParagraph) {
  lastModifiedParagraph.textContent = `Last modified: ${document.lastModified}`;
}
