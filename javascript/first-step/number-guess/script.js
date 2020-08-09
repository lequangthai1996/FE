let randomNumber = Math.floor(Math.random()*100) + 1;
let turnNumber = 1;

//guess form
const guessField = document.querySelector('.guessNumber');
const guessSubmit = document.querySelector('.guessSubmit');

// result
const guessed = document.querySelector('.guessed');
const lastResult = document.querySelector('.lastResult');
const statusOfResult = document.querySelector('.statusOfResult');

let resetButton;
guessField.focus();

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
  let userGuess = Number(guessField.value);
  if(turnNumber === 1) {
    guessed.textContent = 'Previous guess: ' + userGuess; 
  } else {
    guessed.textContent += userGuess;
  }
  if(userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations!';
      lastResult.style.backgroundColor = 'green';
      statusOfResult.textContent = '';
      setGameOver();
  } else {
    if(turnNumber >= 10) {
      lastResult.textContent = 'Game over';
      statusOfResult.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong';
      if(userGuess > randomNumber) {
        statusOfResult.textContent = 'Your guess is too high';
      } else {
        statusOfResult.textContent = 'Your guess is too low';
      }
    }
  }
  turnNumber++;
  guessField.value='';
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'restart Game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessField.disabled = false;
  guessSubmit.disabled = false;
  const resetParas = document.querySelectorAll('.result p');
  for(let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }
  turnNumber = 1;
  document.body.removeChild(resetButton);
  randomNumber = Math.floor(Math.random()*100) + 1;
}

