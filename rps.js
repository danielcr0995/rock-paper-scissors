console.log("Rock, paper, scissors");



console.log(computerPlay());
console.log(playerSelection());


// computer play

function computerPlay(){
    let choice;
    let choices=['rock','paper','scissors'];
    
    let n =Math.floor(Math.random() *3);

    choice=choices[n];
    return choice;

}

//my play
function playerSelection() {
    let choicep;
    // let choices=['rock (1)','paper(2)','scissors (3)'];
    // let mychoice= promt('What is your choice? \n rock (1)','paper(2)','scissors (3)');
    let mychoice= prompt('What is your choice?');
    choicep=mychoice.toLowerCase();
    return choicep;
}

// compare