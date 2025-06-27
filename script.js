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



const gamesection = document.querySelector(".game")
const rockbtn = document.createElement("button");
rockbtn.id = "rock";
rockbtn.textContent = "Rock";
gamesection.appendChild(rockbtn);
const paperbtn = document.createElement("button");
paperbtn.id = "paper"
paperbtn.textContent = "Paper";
gamesection.appendChild(paperbtn)
const scibtn = document.createElement("button");
scibtn.id = "scissors"
scibtn.textContent = "Scissors";
gamesection.appendChild(scibtn)

const rbtn = document.querySelector("#rock");
rbtn.addEventListener("click", function() {playRound("rock", getComputerChoice())});
const pbtn = document.querySelector("#paper");
pbtn.addEventListener("click", function() {playRound("paper", getComputerChoice())});
const sbtn = document.querySelector("#scissors");
sbtn.addEventListener("click", function() {playRound("scissors", getComputerChoice())});


 let humanScore = 0
    let computerScore = 0
let counter = 0
function playRound(humanChoice , computerChoice) {
let check = 0;
 if (humanScore >= 5 || computerScore >= 5) return;
    const result = document.createElement("div")
    const choice = document.createElement("div")
    if (humanChoice == "rock" && computerChoice == "paper") {
        choice.textContent = "You choosed : " + humanChoice + "\n     Computer Choosed : " + computerChoice
        result.textContent = "You lost rock beats paper."
        computerScore++;
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        choice.textContent = "You choosed : " + humanChoice + "\n     Computer Choosed : " + computerChoice
        result.textContent = "You won rock beats scissors."
        humanScore++;
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
        choice.textContent = "You choosed : " + humanChoice + "\n     Computer Choosed : " + computerChoice
        result.textContent = "You lost scissors beats paper."
        computerScore++;
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
     choice.textContent = "You choosed : " + humanChoice + "\n     Computer Choosed : " + computerChoice
      result.textContent = "You won Paper beats rock."
        humanScore++;
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
    choice.textContent = "You choosed : " + humanChoice + "\n     Computer Choosed : " + computerChoice
        result.textContent = "You lost rock beats scissors"
        computerScore++;
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        choice.textContent = "You choosed : " + humanChoice + "\n     Computer Choosed : " + computerChoice
        result.textContent = "You won scissors beats paper."
        humanScore++;
    }
    if (humanChoice === computerChoice && counter != 0) {
       choice.textContent = "You choosed : " + humanChoice + "\n     Computer Choosed : " + computerChoice
        result.textContent = "It's a tie."
    }
    if (humanScore <= 5 || computerScore <= 5) {
        gamesection.appendChild(choice)
        gamesection.appendChild(result)
        counter++;

    }
    
if (humanScore == 5 || computerScore == 5) {

const cmpScr = document.createElement("div")
cmpScr.textContent = "Computer score is " + computerScore
const plScr = document.createElement("div")
plScr.textContent = "Player score is " + humanScore
const msg = document.createElement("div")
msg.textContent = "GAME OVER"
const winner = document.createElement("div")
if (computerScore > humanScore) {
    winner.textContent = "Computer Won"
} else {
    winner.textContent = "Player Won"
}
gamesection.appendChild(msg)
gamesection.appendChild(cmpScr)
gamesection.appendChild(plScr)
gamesection.appendChild(winner)

}
    }



 
playRound();



