// HTML Element
const topNavHamburgerEl = document.getElementById("top-nav-hamburger");
const topNavContainerEl = document.getElementById("top-nav-container");

// Add events
topNavHamburgerEl.addEventListener("click", () => {
    topNavContainerEl.classList.toggle("hamburger-open");
});
