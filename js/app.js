// generate a random number
let answer = Math.floor(Math.random() * 25 + 1);
console.log(answer);

let crossMark = "\u274C"; //cross emoji unicode character
let tickMark = "\u2705"; //tick emoji unicode character
console.log(crossMark);
console.log(tickMark);


document.getElementById("submitguess").onclick = function () {

   // number guessed by user     
   let guessedNum = document.getElementById("guessField").value;

   console.log("guessedNum.length", guessedNum.length)
   if (guessedNum.length == 0) {

      alert("Please enter a number");
   }

   else if (answer == guessedNum) /* if guessed number is equal to actual number*/ {
      alert("WOW, You guessed it right " + tickMark);
   }
   else if (answer - guessedNum < 5) /* if guessed number is greater than actual number*/ {
      console.log("answer - guessedNum", answer - guessedNum);

      alert("Oh no, You were very close " + crossMark);
   }

   else if (answer - guessedNum > 5) /* if guessed number is greater than actual number*/ {

      alert("Oh no, You are very far from guessing it " + crossMark);
   }

}