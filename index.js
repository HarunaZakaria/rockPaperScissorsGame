//this function allow user to enter any of this words(rock, paper,scissors)
function getUserChoice() {
  let userInput = prompt('Enter Rock, Paper, or Scissors').toLowerCase();
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput;
  } else {
    console.log('Invalid choice. Please enter Rock, Paper, or Scissors.'); //give this error if non of the words areentereed
    return getUserChoice();
  }
}
// this function generate a random number and match to any of the words (rock, paper,scissors)
function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
//this function compare the above two functions and determine a winner, loser or tie
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}
// this allows the game to play and report a winner, loser or tie
function playGame() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();

  console.log('You chose: ' + userChoice);
  console.log('Computer chose: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
