console.log("Rock, paper, scissors");

playRound(computerPlay(),playerSelection())
// for (let i=1;i<=5;i++){
//     console.log(computerPlay());
//     console.log(playerSelection());
// }
// console.log(computerPlay());
// console.log(playerSelection());


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

// play round

function playRound(computer,player){
    if (computer===player){
        console.log("It's a tie")
    }else if( player==='rock' && computer==='scissors' ){
        console.log("You won!!! Rock beats Scissors")
    }else if( player==='rock' && computer==='paper' ){
        console.log("You lost :( Paper beats Rock")

    }else if( player==='scissors' && computer==='paper' ){
        console.log("You won!!! scissors beats paper")
    }else if( player==='scissors' && computer==='rock' ){
        console.log("You lost :( rock beats scissors")

    }else if( player==='paper' && computer==='rock' ){
        console.log("You won!!! paper beats rock")
    }else if( player==='paper' && computer==='scissors' ){
        console.log("You lost :( scissors beats paper")
    }

}

