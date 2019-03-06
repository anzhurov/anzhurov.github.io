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

    itemTitle.innerHTML = receivedObject.title;
    itemPrice.forEach(function (item) {
        item.innerHTML = receivedObject.price;
    });
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

addToBagButton.onclick = function (event) {
    let target = event.target;
    let product = JSON.stringify(receivedObject);
    store(product);

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