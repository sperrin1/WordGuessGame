//words to guess
var words = [
    "staircase",
    "secular",
    "circulation",
    "opinion",
    "torture",
    "stomach",
    "beautiful",
    "displace",
    "specimen",
    "parsley",
    "function"
];


// Picks a random word
var word = words[Math.floor(Math.random() * words.length)];
console.log("the random word is ", word);

//Set up the answer array --> need this to go in #main-right
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}
console.log("answer array", answerArray);
document.getElementById('blanks').innerHTML += (answerArray);


//var guess something on.keyup --> new guess
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("guess", letterGuessed)
    //    updateGuesses(letterGuessed);
    //    checkWin();
};

// document.write(letterGuessed); --> replaces the entire page here :(

//var guesses = [] --> stored guess --> on keyup add key to array with .push
// Set up the guesses array
var guessesArray = [];
//guessesArray.push(letterGuessed);
// letterGuessed is undefined here fuck why can't I make this work
// set this aside and work on the html/css for awhile

// document.write(guessesArray);
// console.log("guesses array", guessesArray);


var remainingLetters = word.length;
document.write(remainingLetters);



// while (remainingLetters > 0) {
//     // Show the player their progress
//     alert(answerArray.join(" "));
//     // Get a guess from the player
//     if (guess === null) {
//         // Exit the game loop
//         break;
//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter.");
//     } else {
//         // Update the game state with the guess
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
//     // The end of the game loop
// }

// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);
