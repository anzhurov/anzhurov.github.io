var filterContent = document.getElementById("filter");
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

    productImage.setAttribute("alt", "Image of catalog item");
    productImage.setAttribute("src", productItem.image);

    productTitle.innerHTML = productItem.title;
    productViewText.innerHTML = "View item";

    productImageWrapper.appendChild(productImage);
    productImageWrapper.appendChild(productViewBlock);
    productImageWrapper.appendChild(productViewText);

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