function playerPlay() {

    const choice = prompt("Choose: rock, paper or scissors!").toLowerCase();
    return choice;
}


//Create and saves players selection
//const playerSelection = playerPlay(); 
//Stores the computers choice from fucntion computerPlay
//const computerSelection = computerPlay();
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
//console.log(computerPlay());

//---TODO: Make a condition for if user put in empty string, send user back to to first alert (function)

//Evaluating the users choice and computers choice and compares for result
function playRound (playerSelection, computerSelection){

    const tie = 3;
    const win = 2;
    const lose = 1;
    let result = 0;

    if (playerSelection === "rock" && computerSelection === "paper"){
        alert("You win! Rock beats paper!");
        result = win;
    }

    else if (playerSelection === "rock" && computerSelection === "scissor"){
        alert("You lose! Rock is beaten against paper!");
        result = lose;
    }

    else if (playerSelection === "rock" && computerSelection === "rock"){
        alert("It's a tie!");
        result = tie;
    } 

    else if (playerSelection === "paper" && computerSelection === "rock"){
        alert("You win! Paper beats stone!");
        result = win;
    }

    else if (playerSelection === "paper" && computerSelection === "scissor"){
        alert("You lose! Paper is beaten by scissors!");
        result = lose;
    }

    else if (playerSelection === "paper" && computerSelection === "paper"){
        alert("It's a tie!");
        result = tie;
    }

    else if (playerSelection === "scissor" && computerSelection === "paper"){
        alert("You win! Scissor beats paper!");
        result = win;
    }

    else if (playerSelection === "scissor" && computerSelection === "rock"){
        alert("You lose! Scissor is beaten by rock!");
        result = lose;
    }

    else if (playerSelection === "scissor" && computerSelection === "scissor"){
        alert("It's a tie!");
        result = tie;
    }
    
    return result;

}
const playerSel = "rock";
const computerSel = computerPlay();
console.log(playRound(playerSel, computerSel));