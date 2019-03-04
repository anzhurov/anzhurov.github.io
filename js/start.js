const SLIDER_TIMER_INTERVAL = 10000;

var mainContent = document.getElementById("main");
var arrowLeft = document.querySelector(".slider__arrow--left");
var arrowRight = document.querySelector(".slider__arrow--right");
var dots = document.getElementsByClassName("slider__scroll__dot");
var currentSlideIndex = 1;
var timerId = initSliderTimer();

mainContent.onclick = function (event) {
    let target = event.target;
    while (target !== mainContent) {
        if (target === arrowLeft) {
            clearInterval(timerId);
            showPreviousSlide();
            timerId = initSliderTimer();
            return;
        }
        if (target === arrowRight) {
            clearInterval(timerId);
            showNextSlide();
            timerId = initSliderTimer();
            return;
        }
        for (let i = 0; i < dots.length; i++) {
            if (target === dots.item(i)) {
                clearInterval(timerId);
                showSlideByIndex(++i);
                timerId = initSliderTimer();
                return;
            }
        }
        target = target.parentNode;
    }

    function showPreviousSlide() {
        showSlide(--currentSlideIndex);
    }

    function showSlideByIndex(index) {
        currentSlideIndex = index;
        showSlide(currentSlideIndex);
    }
};

function showNextSlide() {
    showSlide(++currentSlideIndex);
}

function showSlide(slideIndex) {
    let slides = document.getElementsByClassName("slider__slide__image");

    if (slideIndex > slides.length) {
        currentSlideIndex = 1;
    }

    if (slideIndex < 1) {
        currentSlideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[currentSlideIndex - 1].style.display = "block";
    dots[currentSlideIndex - 1].classList.add("active");
}

function initSliderTimer() {
    return setInterval(function () {
        showNextSlide();
    }, SLIDER_TIMER_INTERVAL);
}










