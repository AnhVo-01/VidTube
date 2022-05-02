var menu = document.querySelector(".menu");
var menuIcon = document.querySelector(".menu-icon");
var container = document.querySelector(".container");

menuIcon.onclick = () => {
    menu.classList.toggle("open");
    container.classList.toggle("large-container");
}