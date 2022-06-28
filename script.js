'use strict';

let rolledNumber = 0;
const btnDice = document.querySelectorAll('.btn');
const classDice = document.querySelector('.dice');
let playerDetails = document.querySelectorAll('.player');
let playerScores = document.querySelectorAll('.score');
let playerWins = document.querySelectorAll('.current-score');
classDice.classList.add('hidden');
let p1Score = 0;
let p2Score = 0;
let p1Wins = 0;
let p2Wins = 0;
const activePlayer = function () {
  if (playerDetails[0].classList.contains('player--active')) {
    playerDetails[0].classList.remove('player--active');
    playerDetails[1].classList.add('player--active');
  } else {
    playerDetails[1].classList.remove('player--active');
    playerDetails[0].classList.add('player--active');
  }
};
console.log(playerDetails);
console.log(playerDetails[0]);
playerScores[0].textContent = p1Score;
playerScores[1].textContent = p2Score;
// console.log(playerWins[0].textContent);
btnDice[1].addEventListener('click', function () {
  rolledNumber = Math.floor(Math.random() * 6) + 1;
  classDice.classList.remove('hidden');
  classDice.src = `dice-${rolledNumber}.png`;
  if (playerDetails[0].classList.contains('player--active')) {
    if (rolledNumber === 1) p1Score = 0;
    else p1Score += rolledNumber;
    if (p1Score >= 20) {
      ++p1Wins;
      p1Score = 0;
      p2Score = 0;
      playerScores[1].textContent = 0;
      playerWins[0].textContent = p1Wins;
      playerWins[0].classList.add('player--winner');
    }
    playerScores[0].textContent = p1Score;
  } else {
    if (rolledNumber === 1) p2Score = 0;
    else p2Score += rolledNumber;
    if (p2Score >= 20) {
      ++p2Wins;
      p1Score = 0;
      p2Score = 0;
      playerScores[0].textContent = 0;
      playerWins[1].textContent = p2Wins;
      playerWins[1].classList.add('player--winner');
    }
    playerScores[1].textContent = p2Score;
  }
});

btnDice[2].addEventListener('click', activePlayer);

btnDice[0].addEventListener('click', function () {
  classDice.classList.add('hidden');
  p1Score = 0;
  p2Score = 0;
  p1Wins = 0;
  p2Wins = 0;
  playerScores[0].textContent = 0;
  playerScores[1].textContent = 0;
  playerWins[0].textContent = 0;
  playerWins[1].textContent = 0;
  playerWins[0].classList.remove('player--winner');
  playerWins[1].classList.remove('player--winner');
  playerDetails[1].classList.remove('player--active');
  playerDetails[0].classList.add('player--active');
});
