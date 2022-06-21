//Stores all valid choices for the game
const choices = [
    "rock",
    "paper",
    "scissor"
]
const tie = 3;
const win = 2;
const lose = 1;

//Stores game-result


function playerPlay() {

    const choice = prompt("Choose: rock, paper or scissors!").toLowerCase();
    return choice;
}


//Saves players selection from function playerPlay
//const playerSelection = playerPlay(); 
//Stores the computers choice from function computerPlay
//const computerSelection = computerPlay();

//Randomize the computers choice, selects from array, returns it to us.
function computerPlay () {

    //create a const, randomize an index from array
    const randomNumber = Math.floor(Math.random()*choices.length);
    //grab index from array, put it in choices
    return choices[randomNumber];
}

//print out the randomized number/choices from computerPlay func.
//console.log(computerPlay());

//---TODO: Make a condition for if user put in empty string, send user back to to first alert (function)

//Evaluating the users choice and computers choice and compares for result
//---TODO: Change so code takes the choices from array instead of string
function playRound (playerSelection, computerSelection){


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
//Tests the computerPlay function
/*const playerSel = "rock";
const computerSel = computerPlay();
console.log(playRound(playerSel, computerSel));*/

function game () {

    let playWin = 0;
    let compWin = 0;

    for (let i = 0; i < 5; i++) {

        let result = playRound(playerPlay(), computerPlay());

        if (result === win){
            playWin++;
        }

        else if (result === lose){
            compWin++;
        }
        else if (result === tie){
            continue;
        }
     }

     console.log("Score: \nComputer: " + compWin + "\nPlayer: " + playWin);

     if (playWin>compWin) {

    console.log("You win!");
     }

     else if(playWin === compWin){
         console.log("It's a tie!");
     }

     else {
         console.log("You lose!");
     }
}

game();