var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width > 400) {
    $('.code-info').remove();
    $('.container').remove();
    $('body').append("<p style='position: absolute; top:50%; left:50%; transform: translate(-50%)'>Your device is not supported</p>");
}

$('.next-btn').on('click', function () {
    var selectedOptions = collectSelectedCheckBoxes();
    if (selectedOptions.length == 0) {
        showCode({
            'code': 'Oooops',
            'code_description': 'Select some options'
        });
        return
    }
    var randomCode = getRandomCode(selectedOptions);
    showCode(randomCode);
})

function collectSelectedCheckBoxes() {
    return $('li').toArray()
        .filter(li => $(li).find('input').prop('checked'))
        .map(li => $(li).find('label').text());
}

function showCode(code) {
    $('.code').text(code.code);
    $('.code-description').text(code.code_description);
}

function getRandomCode(selectedOptions) {
    var randomOption = selectedOptions[Math.floor(Math.random() * selectedOptions.length)]
    const codeKeys = Object.keys(CODES[randomOption]);
    var randomCodeKey = codeKeys[Math.floor(Math.random() * codeKeys.length)];
    return {
        'code': randomCodeKey,
        'code_description': CODES[randomOption][randomCodeKey]
    }
}