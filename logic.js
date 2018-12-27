const choises = ["paper", "rock", "scissors"];
const paper_button = $('#paper');
const rock_button = $('#rock');
const scissors_button = $('#scissors');
const message_text = $('#message');
const user_score = $("#user_score");
const computer_score = $("#computer_score");

paper_button.bind("click", function () {
    play("paper");
});
rock_button.bind("click", function () {
    play("rock");
});
scissors_button.bind("click", function () {
    play("scissors");
});

function play(user_choise) {
    var random_number = Math.floor(Math.random() * 3);
    var computer_choise = choises[random_number];
    var result_combo = user_choise + " - " + computer_choise;

    switch (result_combo) {
        case "paper - rock":
        case "rock - scissors":
        case "scissors - paper":
            set_message(result_combo + ". You win!");
            increment_score(user_score);
            break;
        case "paper - paper":
        case "rock - rock":
        case "scissors - scissors":
            set_message(result_combo + ". It's draw!");
            break;
        case "rock - paper":
        case "scissors - rock":
        case "paper - scissors":
            set_message(result_combo + ". You lose!");
            increment_score(computer_score);
            break;
    }
}

function set_message(message) {
    message_text.text(message);
}

function increment_score(score) {
    score.text(parseInt(score.text()) + 1);
}
