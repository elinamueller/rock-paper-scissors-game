//declare variables
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

//buttons
let buttons = document.querySelectorAll('button');

//scores
let score = document.querySelector('#score');

//results message and reset button
let results = document.querySelector('#results');
let reset = document.querySelector('#reset');

//go through each player's button and get the value of it
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonValue = button.id;
        playerSelection = buttonValue;
        playRound();
    });
  });

//end game and announce results of the round
function endGame() {
    if (playerScore > computerScore) {
        results.textContent = "you win this round!";
}   else {
        results.textContent = "you lost this round!";
}
}

//reset game 
reset.addEventListener('click', resetGame);

//reset game
function resetGame() {
    let computerScore = 0;
    let playerScore = 0;
    results.textContent = "let's play!";
    score.textContent = "0" + " : " + "0";
}

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    const aSelection = ["rock", "paper", "scissors"];
    let randSelection = aSelection[Math.floor(Math.random() * aSelection.length)];
    return randSelection;
}

//play one round
function playRound(playerSelection, computerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        endGame(); 
    } else {
    computerSelection = computerPlay();
    playerSelection = buttonValue;
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        results.textContent = "you lose! " + computerSelection + " beats " + playerSelection + "!"
        ++computerScore;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        results.textContent = "you win! " + playerSelection + " beats " + computerSelection + "!"
        ++playerScore;
    } else {
        results.textContent = "that\'s a tie. " + playerSelection + " is " + computerSelection + "!"
    }
    score.textContent = playerScore + " : " + computerScore
}
}