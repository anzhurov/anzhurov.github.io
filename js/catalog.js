// import * as _ from "./libs/lodash";

var filterContent = document.getElementById("filter");
var filterItem = document.querySelectorAll(".filter__button__dropdown");
var category = document.getElementById("category--tablet");
var catalogContainerTop = document.getElementById("catalog__items__wrapper--top");
var catalogContainerBottom = document.getElementById("catalog__items__wrapper--bottom");

filterContent.onclick = function () {
    if (category.classList.contains("tablet__hidden")) {
        category.classList.replace("tablet__hidden", "tablet__view");
    } else {
        category.classList.replace("tablet__view", "tablet__hidden");
    }
};


function createProductElement(productItem) {
    let productElement = document.createElement("figure");
    let productImageWrapper = document.createElement("div");
    let productImage = document.createElement("img");
    let productViewBlock = document.createElement("div");
    let productViewText = document.createElement("h3");
    let productTitle = document.createElement("h4");
    let productID = document.createElement("span");
    let productPrice = initProductPriceElement(productItem.additionalInfo, productItem.price);

    productElement.classList.add("catalog__item");
    if (productItem.additionalClasses.length !== 0) {
        productElement.classList.add(productItem.additionalClasses);
    }

    productImageWrapper.classList.add("catalog__item__image__wrapper");
    productImage.classList.add("catalog__item__image");
    productViewBlock.classList.add("catalog__item__view__item");
    productViewText.classList.add("catalog__item__view__item__text");
    productTitle.classList.add("catalog__item__title");
    productPrice.classList.add("catalog__item__price");
    productID.classList.add("catalog__item__id");

    productImage.setAttribute("alt", "Image of catalog item");
    productImage.setAttribute("src", productItem.image);

    productID.style.display = "none";

    productTitle.innerHTML = productItem.title;
    productViewText.innerHTML = "View item";
    productID.innerHTML = productItem.id;

    productImageWrapper.appendChild(productImage);
    productImageWrapper.appendChild(productViewBlock);
    productImageWrapper.appendChild(productViewText);

    productElement.appendChild(productID);
    productElement.appendChild(productImageWrapper);
    productElement.appendChild(productTitle);
    productElement.appendChild(productPrice);

    return productElement;

    function initProductPriceElement(additionalInfo, itemPrice) {
        let productPriceElement = document.createElement("p");
        let currentPriceElement = document.createElement("span");
        currentPriceElement.classList.add("catalog__item__price");
        currentPriceElement.innerHTML = itemPrice;
        productPriceElement.appendChild(currentPriceElement);

        let percentRegexp = "-\\d+%";
        if (!additionalInfo.match(percentRegexp)) {
            let additionalInfoElement = document.createElement("span");
            additionalInfoElement.classList.add("catalog__additive__info__text", "text__color--gray");
            additionalInfoElement.innerHTML = additionalInfo;

            productPriceElement.appendChild(additionalInfoElement);
            return productPriceElement;
        }

        let percents = parseInt(additionalInfo.replace("-", "").replace("%", ""));
        let currentPrice = parseInt(itemPrice.replace("£", ""));

        let oldPriceElement = document.createElement("span");
        oldPriceElement.classList.add("catalog__item__price", "text__color--gray");
        oldPriceElement.innerHTML = "£" + (currentPrice * 100 / (100 - percents)).toFixed(2);

        let percentsElement = document.createElement("span");
        percentsElement.classList.add("catalog__additive__info__text", "text__color--gray");
        percentsElement.innerHTML = "-" + percents.toString() + "%";

        productPriceElement.insertBefore(percentsElement, currentPriceElement);
        productPriceElement.insertBefore(oldPriceElement, percentsElement);

        return productPriceElement;
    }
}

function initCatalogContainer(productObjects, catalogContainer) {

    for (let i = 0; i < productObjects.length; i++) {
        let productElement = createProductElement(productObjects[i]);
        catalogContainer.appendChild(productElement);
    }

    return catalogContainer;
}

var productObjects = initProductArray();
var productsTop = productObjects.slice(0, 4);
var productsBottom = productObjects.slice(4, 14);
initCatalogContainer(productsTop, catalogContainerTop);
initCatalogContainer(productsBottom, catalogContainerBottom);

filterItem.forEach(function (item) {
    item.onclick = function (event) {
        let target = event.target;
        let productItems = document.querySelectorAll(".catalog__item");
        let productID = productItems[0].firstChild;
        let text = target.parentElement.parentElement.children[0].children[1];
        text.innerText = "";
        let categoryName = target.parentElement.parentElement.children[0].innerText;
        let filterName = target.innerText;
        if (filterName === "Not selected") {
            clear();
            initCatalogContainer(productsTop, catalogContainerTop);
            initCatalogContainer(productsBottom, catalogContainerBottom);
            return;
        }
        text.innerText = filterName;
        let arr = filterProductElement(productObjects, categoryName, filterName);

        hiddenElemets(productItems);
        showElements(productItems, arr);
    }
});

function hiddenElemets(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

function showElements(productItems, arr) {
    for (let i = 0; i < productItems.length; i++) {
        const child = productItems[i].firstChild;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].id == child.innerHTML) {
                productItems[i].style.display = "block";
            }
        }
    }
}

function filterProductElement(productObjects, categoryName, filterName) {
    return _.filter(productObjects, [categoryName.toLowerCase(), filterName]);
}

var productItems = document.querySelectorAll(".catalog__item");
for (let i = 0; i < productItems.length; i++) {
    productItems[i].onclick = function () {
        let productID = productItems[i].firstChild;
        location.href = "item.html" + "?id=" + productID.innerHTML;
    };
}
