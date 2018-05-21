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

//Set up the answer array --> need this to go in #main-right row 2
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}
console.log("answer array", answerArray);
document.getElementById('blanks').innerHTML += (answerArray);


//var guess something onkeyup --> new guess -->#main-right row 3
//var lettersGuessed = [];
// lettersGuessed.push(letterGuessed);
// var letterGuessed = (
    document.onkeyup = function (event) {
        var letterGuessed = (String.fromCharCode(event.keyCode).toLowerCase())
        // console.log("guess", letterGuessed);
        //    updateGuesses(letterGuessed);
        //    checkWin();
        console.log("guess", letterGuessed);
    };
// console.log("guess", lettersGuessed) //why doesn't this work?!?!?
// guess 
// (1) [undefined]
// 0
// :
// " "
// 1
// :
// undefined
// length
// :
// 2
// __proto__
// :
// Array(0)

// document.getElementById('lettersguessed').innerHTML += (lettersGuessed); //how the *@#% is lettersGuessed undefined here!!!!



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
