const menu = document.querySelector(".menu"),
    toggle = document.querySelector(".toggle"),
    menuIcon = document.querySelector(".menu-icon"),
    container = document.querySelector(".container");

toggle.onclick = () => {
    menu.classList.toggle("open");
    container.classList.toggle("large-container");
};

menuIcon.toggle = () => {
    menu.classList.toggle("open");
}