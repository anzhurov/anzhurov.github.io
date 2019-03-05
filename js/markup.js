class Product {
    constructor(title, price, color, fashion, productType, brand, productSize, photo) {
        this.title = title;
        this.price = price;
        this.color = color;
        this. fashion = fashion;
        this.productType = productType;
        this.brand = brand;
        this.productSize = productSize;
        this.photo = "./img/" + photo;
    }
}

function createProductElement() {
    let productElement = document.createElement("div");
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

    productColor.innerHTML = "Color:";
    productSize.innerHTML = "Size:";
    productQuantity.innerHTML = "Quantity:";
    productButton.innerHTML = "Remove item";

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

    productElement.appendChild(productImageWrapper);
    productElement.appendChild(productInfoBlock);

    return productElement;
}