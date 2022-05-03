const menu = document.querySelector(".menu"),
    toggle = document.querySelector(".toggle"),
    container = document.querySelector(".container");

toggle.onclick = () => {
    menu.classList.toggle("open");
    container.classList.toggle("large-container");
};