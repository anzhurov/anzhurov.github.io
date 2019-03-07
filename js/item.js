var sizeButtons = document.getElementsByClassName("item__info__size__value");
var colorButtons = document.getElementsByClassName("item__info__color__value");
var addToBagButton = document.getElementById("item__btn");
var queryString = decodeURIComponent(window.location.search);

function getElementByID(query, productObjects) {
    let objectId = query.slice(query.indexOf("=")+1);
    return _.find(productObjects, ["id", parseInt(objectId)]);
}

function initItem(receivedObject) {
    let itemTitle = document.querySelector(".item__info__headline");
    let itemPrice = document.querySelectorAll(".item__info__price");
    let itemFilterSizeBlock = document.querySelector(".item__info__size");
    let itemFilterColorBlock = document.querySelector(".item__info__color");
    let productSizes = receivedObject.size;
    let productColors = receivedObject.color;

    itemTitle.innerHTML = receivedObject.title;
    itemPrice.forEach(function (item) {
        item.innerHTML = receivedObject.price;
    });

    productSizes.forEach(function(item){
        createSizeElement(itemFilterSizeBlock, item);
    });

    productColors.forEach(function(item){
        createColorElement(itemFilterColorBlock, item);
    });

    function createSizeElement(parent, sizeValue) {
        let sizeElement = document.createElement("div");
        sizeElement.classList.add("item__info__size__value", "size__block");
        sizeElement.innerText = sizeValue;
        parent.appendChild(sizeElement);
    }

    function createColorElement(parent, colorValue) {
        let colorElement = document.createElement("div");
        colorElement.classList.add("item__info__color__value", "color__block");
        colorElement.innerText = colorValue;
        parent.appendChild(colorElement);
    }
}


function setBorderHighlightEventsOnButtons(buttons) {
    function highlightButtonBorder(buttons, target) {
        removeClassIfExistsFromArray(buttons, "checked__item");
        addClass(target, "checked__item");
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).onclick = function (event) {
            let target = event.target;
            let classRemoved = removeClassIfExists(target, "checked__item");
            if (!classRemoved) {
                highlightButtonBorder(buttons, target);
            }
            return target;
        }
    }
}

function replacePhotos() {
    let thumbnailPhotos = document.getElementsByClassName("item__picture--thumb");
    let mainPhoto = document.getElementById("item__photos--full").childNodes;
    for (let i = 0; i < thumbnailPhotos.length; i++) {
        thumbnailPhotos.item(i).onclick = function (event) {
            removeClassIfExistsFromArray(thumbnailPhotos, "active__picture");
            let target = event.target;
            mainPhoto[1].src = target.src;
            addClass(target, "active__picture");
        }
    }
}

function addClass(element, className) {
    element.classList.add(className);
}

function removeClassIfExists(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
        return true;
    }
    return false;
}

function removeClassIfExistsFromArray(arrayElements, className) {
    for (let i = 0; i < arrayElements.length; i++) {
        removeClassIfExists(arrayElements.item(i), className);
    }
}



var productObjects = initProductArray();
var query = queryString.substring(1);
var receivedObject = getElementByID(query, productObjects);

initItem(receivedObject);

setBorderHighlightEventsOnButtons(sizeButtons);
setBorderHighlightEventsOnButtons(colorButtons);
replacePhotos();

addToBagButton.onclick = function () {
    let selectedFilters = document.querySelectorAll(".checked__item");
    let selectedSize = selectedFilters[0].innerHTML;
    let selectedColor = selectedFilters[1].innerHTML;
    let currentObject = Object.assign({}, receivedObject);
    currentObject.size = selectedSize;
    currentObject.color = selectedColor;
    let product = JSON.stringify(currentObject);
    store(product);
    updateShoppingBagContent();

    function store(product) {
        let value = storage.getItem(product);
        if (value == null) {
            storage.setItem(product, "1");
        } else {
            let newCount = parseInt(value) + 1;
            storage.setItem(product, newCount.toString());
        }
    }
};