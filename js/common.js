var filterContent = document.getElementById("filter");
var category = document.getElementById("category--tablet");
var menuButton = document.querySelector(".mobile-menu");
var menu = document.getElementById("menu__mobile");

menuButton.onclick = function () {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
};

filterContent.onclick = function () {
    category.style.display = (category.style.display === 'flex') ? 'none' : 'flex';
};


