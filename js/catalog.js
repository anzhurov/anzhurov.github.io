var filterContent = document.getElementById("filter");
var category = document.getElementById("category--tablet");

filterContent.onclick = function () {
    if (category.classList.contains("tablet__hidden")) {
        category.classList.replace("tablet__hidden", "tablet__view");
    } else {
        category.classList.replace("tablet__view", "tablet__hidden");
    }
};