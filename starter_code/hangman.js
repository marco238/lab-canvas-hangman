var hangman;

function Hangman() {
  this.words = ['hola', 'marco', 'bye'];
  this.secretWord = '';
  this.guessedLetter = '';
  this.errorsLeft = 10;
  this.letters = [];
}
Hangman.prototype._getWord = function() {
  return this.words[Math.floor(Math.random() * this.words.length)];
};
Hangman.prototype._checkIfLetter = function(keyCode) {
  return keyCode >= 65 && keyCode <= 90 ? true : false;
};
Hangman.prototype._checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};
Hangman.prototype._addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};
Hangman.prototype._addWrongLetter = function(letter) {
  if (this.secretWord.indexOf(letter) === -1) {
    this.errorsLeft--;
  }
};
Hangman.prototype._checkGameOver = function() {
  return this.errorsLeft === 0 ? true : false;
};
Hangman.prototype._checkWinner = function() {
  return this.secretWord.length === this.guessedLetter.length ? true : false;
};
document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};
document.onkeydown = function(e) {
};
