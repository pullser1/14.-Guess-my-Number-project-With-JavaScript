'use strict';
// select Variable
const inputNumber = document.querySelector('.guess');
const score = document.querySelector('.score');
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const body = document.querySelector('body');
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');

// Random number
const randomNumber = function () {
  return Math.floor(Math.random() * 20);
};
const random = randomNumber();

// Refresh Page
btnAgain.addEventListener('click', e => {
  location.reload();
  inputNumber.value = 0;
});

// Checking input
const checked = function () {
  const inputValue = Number(inputNumber.value);
  const scoreNum = Number(score.firstChild.data);
  score.innerHTML = `${scoreNum - 1}`;

  if (inputValue === random) {
    body.style.backgroundColor = 'green';
    message.textContent = '🙌 Its Correct';
    highscore.textContent = inputValue;
  } else if (inputValue > random) {
    message.textContent = 'too High!';
  } else if (inputValue < random) {
    message.textContent = 'too Low!';
  } else if (scoreNum === 0) {
    message.textContent = 'Lose the Game!';
    body.style.backgroundColor = 'red';
  }
};

// click event on click btn
btnCheck.addEventListener('click', checked);
