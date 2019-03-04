var menuButton = document.querySelector(".mobile-menu");
var menu = document.getElementById("menu__mobile");

menuButton.onclick = function () {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
};



