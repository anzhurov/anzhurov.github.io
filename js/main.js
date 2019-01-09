$(document).ready(function () {
    $("a").on('click', function (event) {
        var href = $(this).attr('href');
        if ($(href) !== "" && $(href).offset()) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 800, function () {
                window.location.href = href;
            });
        }
    });
});
function myFunction(x) {
    x.classList.toggle("change");
}
function myFunction_cont(x) {
    x.classList.toggle("change_cont");
}