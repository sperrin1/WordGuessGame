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
    "function"
];

// Picks a random word
var word = words[Math.floor(Math.random() * words.length)];
console.log("the random word is ", word);

// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}

document.write(answerArray);
console.log("answer array", answerArray);

var remainingLetters = word.length;


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
