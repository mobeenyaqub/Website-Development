// console.log("Hello");
// prompt("Hello from Javascript!");

// let age=prompt("Enter your age");

// if(age <18){
//     console.log("You are a kid!");
// }

let maximum = parseInt(prompt("Enter the max value"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum + 1);

let guess = parseInt(prompt("Enter your first guess"));

let attempts = 1;

while (parseInt(guess) !== targetNum) {

    if (guess === 'q') {
        break;
    }
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high!Enter a new guess!");
    } else {
        guess = prompt("Too low!Enter a new guess!");

    }
}

if (guess === 'q') {
    console.log("You quit!");
} else {
    console.log(`You got it! It took you ${attempts} guesses`);
}