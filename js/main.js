

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// let supportWrapper = $("div.support-wrapper");
// const wrapperHeightOld = supportWrapper.height();

$("div.question-pair").click(
    function (event) {
        let oldActive = $("div.active-question");
        let oldAnswer = oldActive.find("div.answer");
        let newActive = $(event.currentTarget);
        if (!oldActive.is(newActive)) {
            oldActive.removeClass("active-question");
            oldAnswer.slideToggle(300);
            // supportWrapper.height(wrapperHeightOld);
            let newAnswer = newActive.find("div.answer");
            newAnswer.slideToggle(300);
            // supportWrapper.height(wrapperHeightOld + newAnswer.height());
            newActive.addClass("active-question");
        } else {
            oldActive.removeClass("active-question");
            oldAnswer.slideToggle(300);
            // supportWrapper.height(wrapperHeightOld);
        }
        return false;
    }
);

let controller = {};
let $window = $(window);

let animateScroll = function(elem, enterTime = 400,
                             leaveTime = 400,
                             callbackFunctionEnter = function(){},
                             callbackFunctionLeave = function(){},
                             cssBodyEnter = {opacity: 1},
                             cssBodyLeave = {opacity: 0}) {
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

animateScroll("#challengeH", 800, 100);

animateScroll("#contactsH", 800, 100);

animateScroll("#inf_q", 800, 100);

animateScroll("#ev_place", 800, 100);

animateScroll("#big-text_1", 1500, 100);

//About animation
animateScroll(".about-blocks-wrapper", 2000, 200);

//About-header animation
animateScroll("#aboutH", 800, 100);

//Way-header animation
animateScroll("#wayH", 800, 100);

animateScroll("#ul-ways", 2000, 200);

animateScroll("#contacts-content", 2000, 200);

animateScroll("#programH", 800, 100);

animateScroll("#programBlock", 2000, 200);

animateScroll("#helpH", 800, 100);

animateScroll("#sup", 1500, 100);
