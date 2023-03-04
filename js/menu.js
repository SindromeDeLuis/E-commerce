const navIcon = document.querySelector(".nav-icon")
const navbar = document.querySelector(".navbar ul")

navIcon.addEventListener("click", showNavBar);
navbar.addEventListener("click", showNavBar);

function showNavBar() {
    navbar.classList.toggle("show");
}