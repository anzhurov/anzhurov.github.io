var sizeButtons = document.getElementsByClassName("item__info__size__value");
var colorButtons = document.getElementsByClassName("item__info__color__value");

function setBorderHighlightEventsOnButtons(buttons) {
    function highlightButtonBorder(buttons, target) {
        for (let i = 0; i < buttons.length; i++) {
            removeClassIfExists(buttons.item(i), "checked__item");
        }
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

setBorderHighlightEventsOnButtons(sizeButtons);
setBorderHighlightEventsOnButtons(colorButtons);
