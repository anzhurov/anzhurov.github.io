var shoppingBag = document.getElementById("shopping__bag__wrapper");
var totalCost = document.getElementById("shopping__state__total__price");
var productObjects = getProductsFromStorage();
initProductContainer(productObjects, shoppingBag);
initTotalCostElement();
var productItems = document.querySelectorAll(".shopping__bag__item");

function getProductsFromStorage() {
    let products = [];

    for (let i = 0; i < storage.length; i++) {
        let product = JSON.parse(storage.key(i));
        products.push(product);
    }

    return products;
}

function ifEmpty() {
    let emptyMessageText = document.getElementById("empty__message__wrapper");
    let shoppingInfo = document.getElementById("shopping__state");
    let productObjects = getProductsFromStorage();
    if (productObjects != null) {
        emptyMessageText.style.display = "none";
        shoppingInfo.style.display = "flex";
    }
}

function createProductElement(productItem) {
    let productElement = document.createElement("div");
    let productID = document.createElement("span")
    let productImageWrapper = document.createElement("div");
    let productImage = document.createElement("img");
    let productViewBlock = document.createElement("div");
    let productViewText = document.createElement("h3");
    let productInfoBlock = document.createElement("div");
    let productTitle = document.createElement("h6");
    let productPrice = document.createElement("h5");
    let productFiltersBlock = document.createElement("div");
    let productColor = document.createElement("p");
    let productSize = document.createElement("p");
    let productQuantity = document.createElement("p");
    let productButton = document.createElement("button");

    productElement.classList.add("shopping__bag__item");
    productID.classList.add("shopping__item__id");
    productImageWrapper.classList.add("shopping__item__image__wrapper");
    productImage.classList.add("shopping__bag__image");
    productViewBlock.classList.add("shopping__item__view__item");
    productViewText.classList.add("shopping__item__view__item__text");
    productInfoBlock.classList.add("shopping__bag__info");
    productTitle.classList.add("shopping__item__title");
    productPrice.classList.add("shopping__item__price");
    productFiltersBlock.classList.add("shopping__item__filters");
    productColor.classList.add("shopping__item__color");
    productSize.classList.add("shopping__item__size");
    productQuantity.classList.add("shopping__item__quantity");
    productButton.classList.add("shopping__item__btn");

    productImage.setAttribute("alt", "Photo of item");
    productImage.setAttribute("src", productItem.image);

    productID.style.display = "none";

    productTitle.innerHTML = productItem.title;
    productPrice.innerHTML = productItem.price;
    productColor.innerHTML = "Color: " + productItem.color;
    productSize.innerHTML = "Size: " + productItem.size;
    productQuantity.innerHTML = "Quantity: " + getCountOfProduct(JSON.stringify(productItem));
    productButton.innerHTML = "Remove item";
    productViewText.innerHTML = "View more";
    productID.innerHTML = productItem.id;

    productImageWrapper.appendChild(productImage);
    productImageWrapper.appendChild(productViewBlock);
    productImageWrapper.appendChild(productViewText);

    productFiltersBlock.appendChild(productColor);
    productFiltersBlock.appendChild(productSize);
    productFiltersBlock.appendChild(productQuantity);

    productInfoBlock.appendChild(productTitle);
    productInfoBlock.appendChild(productPrice);
    productInfoBlock.appendChild(productFiltersBlock);
    productInfoBlock.appendChild(productButton);

    productElement.appendChild(productID);
    productElement.appendChild(productImageWrapper);
    productElement.appendChild(productInfoBlock);

    return productElement;
}

function initProductContainer(productObjects, shoppingBag) {

    for (let i = 0; i < productObjects.length; i++) {
        let productElement = createProductElement(productObjects[i]);
        shoppingBag.appendChild(productElement);
    }

    return shoppingBag;
}

function initTotalCostElement() {
    let price = getTotalCostOfProductsFromStore();
    totalCost.innerHTML = "£" + price;
}

for (let i = 0; i < productItems.length; i++) {
    productItems[i].onclick = function () {
        let productID = productItems[i].firstChild;
        location.href = "item.html" + "?id=" + productID.innerHTML;
    };
}