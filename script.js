let computerChoice = "rock";
let humanChoice = "rock";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
   let choice = Math.random()
   if (choice < 0.3 || choice < 0) {
      return computerChoice = "paper"
   }
   else if (choice < 0.65 || choice < 0.3) {
      return computerChoice = "scissors"
   }
   else {
      return computerChoice = "rock"
   }
}

function getHumanChoice() {
   let choice = prompt("Choose : Paper, Rock Or Scissors")
   return humanChoice = choice.toLowerCase()
}

function playGround() {
   getComputerChoice()
   getHumanChoice()

      if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
       humanScore++;
       alert(`You win! ${humanChoice} beats ${computerChoice}`);
   }
   else if (humanChoice === computerChoice){
       alert(`Tie! You chose ${humanChoice} and computer chose ${computerChoice}`);
   }
   else {
       computerScore++;
       alert(`You are Big Loooser! ${computerChoice} beats ${humanChoice}`);
   }
}

function playGame () {
   playGround()
   playGround()
   playGround()
   playGround()
   playGround()
   return alert(`Scores: You scored ${humanScore} and Computer ${computerScore}`)
}

playGame();