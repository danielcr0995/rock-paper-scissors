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
    result=playRound(computerPlay(),choicep);
    console.log(result);
    console.log(result);
    // gamescore=score(result);
    
       
    console.log(score);
    let newscore=update_score(score,result);
    score=newscore;
    console.log(score);
    show_score(score);
    game_finished(score);
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
function computerPlay(){
    let choice;
    let choices=['rock','paper','scissors'];
    
    let n =Math.floor(Math.random() *3);

    choice=choices[n];
    return choice;

}
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

function gf_content(txt, element,parent){
    element.textContent=txt;
    element.style.fontSize='50px';
    element.style.textAlign='center';
    
    parent.replaceWith(element);




}
function game_finished(score){
    //remove buttons
    if(score[0]==5 || score[1]==5) {
        let content=document.getElementById('content');
        // del.parentNode.removeChild(del);
        let newcontent=document.createElement('p');
        newcontent.classList.add('finalmessage');

        //game won
    
        if( score[0]==5){
            let message="CONGRATULATIONS!!!!\n\nYou won the game"
            gf_content(message, newcontent,content);


        } 
        //game lost
        else if(score[1]==5){
            let message="You lost:(\n\nGood luck next time"
            gf_content(message,newcontent,content);

        }

    }
    
    // restart game
}

function update_score(oldscore,newscore){
    // old score and new score is an array 
    resultscore=[oldscore[0]+newscore[0],oldscore[1]+newscore[1]];
    return resultscore;
}

function show_score(score){
    

    let scorecontainer=document.querySelector('.totalscore');
    let newscorepcontent=document.createElement('p');
    newscorepcontent.classList.add('totalscore');
    // oldcontent=newscorepcontent.textContent;
    // console.log(oldcontent);
    newscorepcontent.textContent=`You ${score[0]} -  ${score[1]} Computer`;
    scorecontainer.replaceWith(newscorepcontent);
    document.querySelector('body').style.height="100vh";
}


let score=[0,0]
let btn=document.querySelector('.button');
window.addEventListener('click', play);
