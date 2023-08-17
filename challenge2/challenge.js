console.log("Hello World");

var hi1="Hello World";
console.log(hi1)

var hey1="Hello";
var hey2=" World"
console.log(hey1+hey2);

function getComputerChoice(){
  return
}

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { return userInput }
  else { console.log('Error message!!!') }
};
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0: return 'rock'; break;
    case 1: return 'paper'; break;
    case 2: return 'scissors'; break;
  }
}
function round(playerSelection, computerSelection){
  if (computerSelection === playerSelection) {
    r='The game is a tie!';
  }
  if (computerSelection === "rock" && playerSelection === "paper") { 
    r='The User won'; 
  }
  if (computerSelection === "rock" && playerSelection === "scissors") {
    r='The Computer won';
  }
  if (computerSelection === "paper" && playerSelection === "scissors") {
    r='The User won';
  }
  if (computerSelection === "paper" && playerSelection === "rock") {
    r='The Computer won';
  }
  if (computerSelection === "scissors" && playerSelection === "paper") {
    r='The Computer won';
  }
  if (computerSelection === "scissors" && playerSelection === "rock") {
    r='The User won';
  }
}
function playRound(){
  const playerSelection = getUserChoice(prompt('Choose one : rock, paper, scissors'));
  const computerSelection = getComputerChoice();
  console.log(round(playerSelection, computerSelection));
};
function game(){
  var Computer=0;
  var Player=0;

  for(var i=1;i<=5;i++){
    playRound()
  if(r=="The Computer won")
      Computer=Computer+1;
    
    else if(r=="The User won"){
      Player=Player+1
    }
  }
  if(Computer>Player){console.log(`Computer ${Computer} ${Player} Player, Computer won `)}
  else if(Computer<Player){console.log(`Computer ${Computer} ${Player} Player, Player won `)}
  else{console.log(`Computer ${Computer} ${Player} Player, This game is a tie `) }
}
game();
