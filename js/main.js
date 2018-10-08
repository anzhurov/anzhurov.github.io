

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

let supportWrapper = $("div.support-wrapper");
const wrapperHeightOld = supportWrapper.height();

$("div.question-pair").click(
    function (event) {
        let oldActive = $("div.active-question");
        let oldAnswer = oldActive.find("div.answer");
        let newActive = $(event.currentTarget);
        if(oldActive.length) {
            if (!oldActive.is(newActive)) {
                oldActive.removeClass("active-question");
                let newAnswer = newActive.find("div.answer");
                oldAnswer.slideToggle({duration: 300, progress: function () {
                        supportWrapper.height(wrapperHeightOld + oldAnswer.height());
                    }, complete: function () {
                        newAnswer.slideToggle({duration: 300, progress: function () {
                                supportWrapper.height(wrapperHeightOld + newAnswer.height());
                            }});
                    }});
                newActive.addClass("active-question");
            } else {
                oldActive.removeClass("active-question");
                oldAnswer.slideToggle({duration: 300, progress: function () {
                        supportWrapper.height(wrapperHeightOld + oldAnswer.height());
                    }});
            }
        } else {
            newActive.addClass("active-question");
            let newAnswer = newActive.find("div.answer");
            newAnswer.slideToggle({duration: 300, progress: function () {
                    supportWrapper.height(wrapperHeightOld + newAnswer.height());
                }});
        }
        return false;
    }
);


let regFunc = function () {
    let needful = new Date(2018, 9, 15);
    if (needful > new Date()) {
        $("#earlyReg").animate({opacity: 1}, 300);
        return false
    }
};

$(".regButt").click(regFunc);


let controller = {};
let $window = $(window);

let animateScrollAppearing = function(elem, enterTime = 400,
                                      leaveTime = 400,
                                      callbackFunctionEnter = function(){},
                                      callbackFunctionLeave = function(){},
                                      cssBodyEnter = {opacity: 1},
                                      cssBodyLeave = {opacity: 0}) {
    controller[elem] = false;
    $window.scroll(function () {
        let obj = $(elem);
        if(($window.scrollTop() + $window.height()) > obj.offset().top && !controller[elem]) {
            controller[elem] = true;
            obj.animate(cssBodyEnter, enterTime, callbackFunctionEnter());
        } else if(($window.scrollTop() + $window.height()) < obj.offset().top && controller[elem]) {
            controller[elem] = false;
            obj.animate(cssBodyLeave, leaveTime, callbackFunctionLeave());
        }
    })
};

animateScrollAppearing("#challengeH", 800, 100);

animateScrollAppearing("#contactsH", 800, 100);

animateScrollAppearing("#inf_q", 800, 100);

animateScrollAppearing("#ev_place", 800, 100);

animateScrollAppearing("#big-text_1", 1500, 100);

//About animation
animateScrollAppearing(".about-blocks-wrapper", 2000, 200);

//About-header animation
animateScrollAppearing("#aboutH", 800, 100);

//Way-header animation
animateScrollAppearing("#wayH", 800, 100);

animateScrollAppearing("#ul-ways", 2000, 200);

animateScrollAppearing("#contacts-content", 2000, 200);

animateScrollAppearing("#programH", 800, 100);

animateScrollAppearing("#programBlock", 2000, 200);

animateScrollAppearing("#helpH", 800, 100);

animateScrollAppearing("#sup", 1500, 100);

let animated = Object.keys(controller);

    for (let i  = 0; i < animated.length; i++) {
        if (wasScrolled(animated[i])) {
            $(animated[i]).animate({opacity: 1}, 800);
            controller[animated[i]] = true
        }
    }

function wasScrolled(elem) {
    return ($window.scrollTop() + $window.height()) > $(elem).offset().top;
}

// function isScrolledIntoView(elem) {
//     let docViewTop = $(window).scrollTop();
//     let docViewBottom = docViewTop + $(window).height();
//
//     let elemTop = $(elem).offset().top;
//     let elemBottom = elemTop + $(elem).height();
//
//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }
//
// let brightOuter = function bright(elem, dusk, css = {textShadow: "#0fe0e0 1px 1px 15px"}) {
//     $(elem).animate(css, 500, function () {
//         dusk(elem, bright);
//     })
// }
//
// let duskOuter = function dusk(elem, bright, css = {textShadow: "#0fe0e0 1px 1px 1px"}) {
//     $(elem).animate(css, 500, function () {
//         bright(elem, dusk);
//     })
// }
//
// function animateHeader(elem) {
//     brightOuter(elem, duskOuter);
// }
//
// animateHeader("#contactsH");
// animateHeader("#challengeH");
//
// animateHeader("#aboutH");
//
// animateHeader("#wayH");
//
// animateHeader("#programH");
//
// animateHeader("#helpH");