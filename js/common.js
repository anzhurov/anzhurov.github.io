var headerContent = document.getElementById("header");
var menuButton = document.querySelector(".mobile-menu");
var menu = document.getElementById("menu__mobile");

headerContent.onclick = function (event) {
    var target = event.target;

    while (target !== headerContent) {
        if (target === menuButton) {
            menu.style.display = (menu.style.display === 'block') ? 'none' : 'block'
            return;
        }
        target = target.parentNode;
    }
};

