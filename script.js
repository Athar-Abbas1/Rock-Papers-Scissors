console.log("hello")
function getComputerChoice() {
let randomNumber = Math.floor(Math.random() * 3)
if (randomNumber == 0) {
    return "rock"
}
else if (randomNumber == 1) {
    return "paper"
}
else {
    return "scissors"
}
}
function getHumanChoice() {
return prompt("What do you chose ?")

}
let humanScore = 0
    let computerScore = 0
function playRound(humanChoice , computerChoice) {
    humanChoice.toLowerCase()
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You choosed : " , humanChoice , "     Computer Choosed : " , computerChoice)
        console.log("You lost rock beats paper.")
        computerScore++;
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You choosed : " , humanChoice , "     Computer Choosed : " , computerChoice)
        console.log("You won rock beats scissors.")
        humanScore++;
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You choosed : " , humanChoice , "     Computer Choosed : " , computerChoice)
        console.log("You lost scissors beats paper.")
        computerScore++;
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You choosed : " , humanChoice , "     Computer Choosed : " , computerChoice)
        console.log("You won Paper beats rock.")
        humanScore++;
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You choosed : " , humanChoice , "     Computer Choosed : " , computerChoice)
        console.log("You lost rock beats scissors")
        computerScore++;
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You choosed : " , humanChoice , "     Computer Choosed : " , computerChoice)
        console.log("You won scissors beats paper.")
        humanScore++;
    }
    if (humanChoice === computerChoice) {
        console.log("You choosed : " , humanChoice , "     Computer Choosed : " , computerChoice)
        console.log("It's a tie.")
    }
    
}
function playGame() {

    for (let i = 0 ; i <= 4 ; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection , computerSelection)
    }
    console.log("Your score : " , humanScore)
    console.log("Computer Score : " , computerScore)
    if (computerScore > humanScore) {
        console.log("Computer Won")
    } 
    else {
        console.log("You won.")
    }
}
playGame()
