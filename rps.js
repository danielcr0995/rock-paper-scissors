console.log("Rock, paper, scissors");

//game();

// playRound(computerPlay(),playerSelection())
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
function play(e) {
    // let choicep=console.log(typeof ?e.target.id);
     
    // let choices=['rock (1)','paper(2)','scissors (3)'];
    // let mychoice= promt('What is your choice? \n rock (1)','paper(2)','scissors (3)');
    // let mychoice= prompt('What is your choice?');
    // choicep=mychoice.toLowerCase();
    let choicep=e.target.id;
    // let choicep=document.querySelector()
    console.log(choicep);
    playRound(computerPlay(),choicep);
}

function show_result(text){
    let rescontainer=document.querySelector('.gameresultp');
    let pcontent=document.createElement('p');
    pcontent.classList.add('gameresultp');
    oldcontent=pcontent.textContent;
    console.log(oldcontent);
    pcontent.textContent=text;
    rescontainer.replaceWith(pcontent)

}
// play round

function playRound(computer,player){
    if (computer===player){
        console.log("It's a tie");
        txtres=("It's a tie");
        // let rescontainer=document.querySelector('.gameresult');
        // let pcontent=document.createElement('p');
        // pcontent.classList.add('result');
        // pcontent.textContent=txtres;
        // rescontainer.replaceWith(pcontent);
        show_result(txtres);
        let result=[0,0];
        return result;
    }else if( player==='rock' && computer==='scissors' ){
        console.log("You won!!! Rock beats Scissors");
        txtres=("You won!!! Rock beats Scissors");
        show_result(txtres);

        let result=[1,0];
        return result;
    }else if( player==='rock' && computer==='paper' ){
        console.log("You lost :( Paper beats Rock");
        txtres=("You lost :( Paper beats Rock");
        show_result(txtres);

        let result=[0,1];
        return result;

    }else if( player==='scissors' && computer==='paper' ){
        console.log("You won!!! scissors beats paper");
        txtres=("You won!!! scissors beats paper");
        show_result(txtres);

        let result=[1,0];
        return result;
    }else if( player==='scissors' && computer==='rock' ){
        console.log("You lost :( rock beats scissors");
        txtres=("You lost :( rock beats scissors");
        show_result(txtres);

        let result=[0,1];
        return result;

    }else if( player==='paper' && computer==='rock' ){
        console.log("You won!!! paper beats rock");
        txtres=("You won!!! paper beats rock");
        show_result(txtres);

        let result=[1,0];
        return result;
    }else if( player==='paper' && computer==='scissors' ){
        console.log("You lost :( scissors beats paper");
        txtres=("You lost :( scissors beats paper");
        show_result(txtres);

        let result=[0,1];
        return result;
    }

}

function game(){
    for (let i=1; i<=5;i++){
        playRound(computerPlay(),playerSelection());
    }
}

function restart(){

}
function game_finished(score){
    //remove buttons
    let del=document.getElementById('buttons');
    del.parentNode.removeChild(del);
    //game won
    if( score[0]==5){

    } 
    //game lost
    else if(score[1]==5){

    }
    // restart game
}

function score(){    
    final_score=[0,0];
    result=playRound();
    final_score=[final_score[0]+result[0],final_score[1]+result[1]]
    
    if (final_score[0]==5 || final_score[1]==5 ){
        game_finished(final_score)
    }
}


window.addEventListener('click', play);
