// HTML Element
const topNavHamburgers = document.getElementById("top-nav-hamburger");
const topNavContainer = document.getElementById("top-nav-container");

const documentationHamburger = document.getElementById("documentation-hamburger");
const documentationContainer = document.getElementById("documentation-container");

// Add events
topNavHamburgers.addEventListener("click", () => {
    topNavContainer.classList.toggle("top-nav-open");
});

documentationHamburger.addEventListener("click", () => {
    documentationContainer.classList.toggle("top-nav-open");
});