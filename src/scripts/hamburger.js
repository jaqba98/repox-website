// HTML Element
const topNavHamburgers = document.getElementById("top-nav-hamburger");
const topNavContainer = document.getElementById("top-nav-container");

const documentationHamburger = document.getElementById("documentation-hamburger");
const documentationContainer = document.getElementById("documentation-container");
const documentationContentContainer = document.getElementById("documentation-content-container");

// Add events
topNavHamburgers.addEventListener("click", () => {
    topNavContainer.classList.toggle("top-nav-open");
});

documentationHamburger.addEventListener("click", () => {
    documentationContainer.classList.toggle("top-nav-open");
});

documentationContentContainer.addEventListener("click", () => {
    documentationContainer.classList.remove("top-nav-open");
});