var wins = 0;
var losses = 0;
var guesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {
// Logs keys inputed by user
var usersGuess = event.key;

// Converts user inputs to lowercase in order to match lowercase elements in the array
var usersGuessL = usersGuess.toLowerCase();

// Choosing random array element for computer guess
var rand = compGuesses[Math.floor(Math.random() * compGuesses.length)];

alert("User guess: " + usersGuess);
alert("Computer guess: " + rand);

if (usersGuessL === rand) {
     alert("You Win!");}
     else alert ("refresh to try again")}
    
