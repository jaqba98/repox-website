// HTML Element
const documentationHamburgerEl = document.getElementById("documentation-hamburger");
const documentationContainerEl = document.getElementById("documentation-container");

// Add events
documentationHamburgerEl.addEventListener("click", () => {
    documentationContainerEl.classList.toggle("hamburger-open");
});
