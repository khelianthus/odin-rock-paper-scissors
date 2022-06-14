
//Create and saves players selection
const playerSelection = prompt("Choose: rock, paper or scissors!").toLowerCase();
//Stores the computers choice from fucntion computerPlay
const computerSelection = computerPlay();
//Stores all valid choices for the game
const choices = [
    "rock",
    "paper",
    "scissor"
]

//Randomize the computers choice, returns it to us.
function computerPlay () {

    //create a const, randomize an index from array
    const randomNumber = Math.floor(Math.random()*choices.length);
    //grab index from array, put it in choices
    return choices[randomNumber];
}

//print out the randomized number from computerPlay func.
console.log(computerPlay());

//Evaluating the users choice and computers choice and compares for result
function playRound (playerSelection, computerSelection){

    if (playerSelection === "rock" && computerSelection === "paper"){
        alert("You win! Rock beats paper!");
    }

    else if (playerSelection === "rock" && computerSelection === "paper"){
        alert("You lose! Rock is beaten against paper!");
    }

    else if (playerSelection === "rock" && computerSelection === "rock"){
        alert("It's a tie!");
    } 

    else if (playerSelection === "paper" && computerSelection === "stone"){
        alert("You win! Paper beats stone!");
    }

    else if (playerSelection === "paper" && computerSelection === "scissor"){
        alert("You lose! Paper is beaten by scissors!");
    }

    else if (playerSelection === "paper" && computerSelection === "paper"){
        alert("It's a tie!");
    }

    else if (playerSelection === "scissor" && computerSelection === "paper"){
        alert("You win! Scissor beats paper!");
    }

    else if (playerSelection === "scissor" && computerSelection === "rock"){
        alert("You lose! Scissor is beaten by rock!");
    }

    else (playerSelection === "scissor" && computerSelection === "scissor"){
        alert("It's a tie!");
    }

    return playRound;
}

console.log(playRound(playerSelection, computerSelection));