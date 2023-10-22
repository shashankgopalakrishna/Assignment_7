function playGame(user, computer) {
    if (computer === user)
        window.alert("It is a Tie!")
    else if ((user === "rock" && computer=== "scissors") ||
        (user === "scissors" && computer === "paper") ||
        (user === "paper" && computer === "rock"))
        window.alert("User Wins!");
    else if((computer === "rock" && user === "scissors") ||
        (computer === "scissors" && user === "paper") ||
        (computer === "paper" && user === "rock"))
        window.alert("Computer Wins!");
}


function main() {
    var playAgain;
    do {
        while(true) {
            var userChoice = parseInt(window.prompt("Enter the Choice:\n 1: Rock\n 2:Paper\n 3:Scissors"));
            if (userChoice === 1) {
                userChoice = "rock";
                break;
            }
            else if (userChoice === 2) {
                userChoice = "paper";
                break;
            }
            else if (userChoice === 3) {
                userChoice = "scissors";
                break;
            }
            else {
                window.alert("Please enter the valid choice available!");
            }
        }
        var computerChoice = Math.round(Math.random() * 2);
        if (computerChoice === 0){
            computerChoice = "rock";
        }
        else if (computerChoice === 1){
            computerChoice = "paper";
        }
        else if (computerChoice === 2){
            computerChoice = "scissors";
        }
        playGame(userChoice,computerChoice);
        playAgain= window.prompt("Do you want to play again? y/n");

    } while(playAgain != "n");
}

main();
