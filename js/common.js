var storage = localStorage;

var menuButton = document.querySelector(".mobile-menu");
var menu = document.getElementById("menu__mobile");
var totalPriceInShoppingBag = document.getElementById("shopping-bag__total-price");
var countOfProductsInShoppingBag = document.getElementById("shopping-bag__total-count");

if (storage.length !== null) {
    setShoppingBagContent(storage, totalPriceInShoppingBag, countOfProductsInShoppingBag);
} else {
    totalPriceInShoppingBag.innerHTML = "";
    countOfProductsInShoppingBag.innerHTML = "(0)";
}

function setShoppingBagContent(storage, totalPriceInShoppingBag, countOfProductsInShoppingBag) {
    let price = 0;
    let count = 0;

    for (let i = 0; i < storage.length; i++) {
        let key = storage.key(i);
        let value = storage.getItem(key);
        let product = JSON.parse(key);
        price += parseFloat(product.price.slice(1)) * parseInt(value);
        count += parseInt(value);
    }

    changeContent();

    function changeContent() {
        totalPriceInShoppingBag.innerHTML = "£" + price;
        countOfProductsInShoppingBag.innerHTML = "(" + count + ")";
    }
}

menuButton.onclick = function () {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
};

class Product {
    constructor(id, title, price, color, size, fashion, productType, brand, image, additionalInfo,
                additionalClasses) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.color = color;
        this.size = size;
        this.fashion = fashion;
        this.productType = productType;
        this.brand = brand;
        this.image = image;
        this.additionalInfo = additionalInfo;
        this.additionalClasses = additionalClasses;
    }
}

function initProductArray() {
    let products = [];
    let id = 0;

    products.push(new Product(++id,
        "Only skinny jeans",
        "£65.00",
        "Black",
        "UK 20",
        "New Look",
        "Jersey Tops",
        "New Balance",
        "./img/catalog/1.jpg",
        "",
        ""));

    products.push(new Product(++id,
        "Neck Knitted Jumper",
        "£76.25", "Green",
        "UK 18",
        "Nail the 90s",
        "Coats & Jackets",
        "Chi Chi London",
        "./img/catalog/2.jpg",
        "",
        ""));

    products.push(new Product(++id,
        "Turtle Neck Jumper in Rib",
        "£130.25",
        "Green",
        "UK 22S",
        "Classical style",
        "Coats & Jackets",
        "Antipodium",
        "./img/catalog/3.jpg",
        "New",
        "mobile__hidden"));

    products.push(new Product(++id,
        "With Patchwork Crochet",
        "£80.60",
        "Red",
        "UK 20S",
        "Casual style",
        "Dresses",
        "River Island",
        "./img/catalog/4.jpg",
        "",
        "tablet__hidden"));

    products.push(new Product(++id,
        "Turtle Neck Jumper in Rib",
        "£130.25",
        "Green",
        "UK 22S",
        "Classical style",
        "Coats & Jackets",
        "Antipodium",
        "./img/catalog/3.jpg",
        "New",
        "mobile__view"));

    products.push(new Product(++id,
        "With Patchwork Crochet",
        "£80.60",
        "Red",
        "UK 20S",
        "Casual style",
        "Dresses",
        "River Island",
        "./img/catalog/4.jpg",
        "",
        "tablet__view"));

    products.push(new Product(++id,
        "Levi’s Jeans for women",
        "",
        "Blue",
        "UK 18L",
        "Sport",
        "Jeans",
        "Adidas",
        "./img/catalog/5.jpg",
        "More colours",
        ""));

    products.push(new Product(++id,
        "Boyfriend T-Shirt with Bohemian Print",
        "£90.00",
        "Green",
        "UK 20",
        "New Look",
        "Jersey Tops",
        "Antipodium",
        "./img/catalog/6.jpg",
        "-25%",
        ""));

    products.push(new Product(++id,
        "Colour Block",
        "£550.50",
        "Black",
        "UK 20L",
        "Casual style",
        "Coats & Jackets",
        "Chi Chi London",
        "./img/catalog/7.jpg",
        "",
        ""));

    products.push(new Product(++id,
        "Monki Festval Knitted",
        "£24.75",
        "Blue",
        "UK 22S",
        "Vintage",
        "Coats & Jackets",
        "River Island",
        "./img/catalog/8.jpg",
        "",
        ""));

    products.push(new Product(++id,
        "Oversized Cardigan",
        "£90.00",
        "Gold",
        "UK 18",
        "New Look",
        "Dresses",
        "New Balance",
        "./img/catalog/9.jpg",
        "",
        ""));

    products.push(new Product(++id,
        "Paul & Joe Sister Jumper with Neon Trims",
        "£19.75",
        "Blue",
        "UK 18L",
        "New Look",
        "Jersey Tops",
        "Antipodium",
        "./img/catalog/10.jpg",
        "New",
        ""));

    products.push(new Product(++id,
        "Only Busted Knee Jean",
        "£140.50",
        "Black",
        "UK 22S",
        "Sport",
        "Coats & Jackets",
        "Adidas",
        "./img/catalog/11.jpg",
        "",
        ""));

    products.push(new Product(++id,
        "Boyfriend T-Shirt with Bohemian Print",
        "£85.75",
        "Black",
        "UK 2",
        "Nail the 90s",
        "Dresses",
        "Chi Chi London",
        "./img/catalog/12.jpg",
        "",
        ""));

    products.push(new Product(++id,
        "Boyfriend T-Shirt with Bohemian Print",
        "£34.25",
        "Black",
        "UK 22L",
        "Sport",
        "Coats & Jackets",
        "New Balance",
        "./img/arrivals/item2.jpg",
        "",
        ""));

    return products;
}



