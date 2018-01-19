//Create secretNumber
var secretNumber = 4;

//Ask user for guess
var guess = prompt("Guess a number");
alert(guess);

//Check if guess is right
if(Number(guess===secretNumber)) {
    alert("You got it right!");
}

//Otherwise check if higher
else if(Number(guess) > secretNumber) {
    alert("Too high. Guess again");
}

else {
    alert("Too low. Guess again");
}
