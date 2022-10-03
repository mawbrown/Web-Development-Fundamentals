function runGame() {
    
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    const target = Math.floor(Math.random() * 100) + 1;
    
    do {
        guessString = prompt('I am thinking of a number in the range of 1 to 100.\n\nWhat is the number?');

        if (guessString === null) {
            return;
        }

        numTries++;
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert('Congratulations!\n\nYou guessed ' + target + ' correctly.\n\n...It only took you ' + numTries + ' tries.');

}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('You did not enter a number.\n\nPlease enter a number between 1 to 100.');
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('You entered a number that is out of range.\n\nPlease enter a number between 1 to 100.');
    } else if (guessNumber > target) {
        alert('Your guess is larger than the target.\n\nPlease enter another number.');
    } else if (guessNumber < target) {
        alert('Your guess is smaller than the target.\n\nPlease enter another number.');
    } else {
        correct = true;
    } 
    return correct;
}