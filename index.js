function playRound(playerSelection) {
  let computerChoices = ['rock', 'paper', 'scissors'];
  let computerSelection =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  let resultElement = document.querySelector('#container');
  resultElement.textContent = 'Player chose: ' + playerSelection + '\n';
  resultElement.textContent += 'Computer chose: ' + computerSelection + '\n';

  if (playerSelection === computerSelection) {
    resultElement.textContent += "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    resultElement.textContent += 'You win!';
  } else {
    resultElement.textContent += 'You lose!';
  }
}

document.getElementById('rock').addEventListener('click', function () {
  playRound('rock');
});

document.getElementById('paper').addEventListener('click', function () {
  playRound('paper');
});

document.getElementById('scissors').addEventListener('click', function () {
  playRound('scissors');
});
