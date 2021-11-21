let ucount =0;
let ccount =0; 
const usercount = document.getElementById('user-score');
const computercount = document.getElementById('computer-score');
const scoreboard = document.querySelector('.score-board');
const finalresult = document.querySelector('.result > p ');
const choice_r = document.getElementById('r');
const choice_p = document.getElementById('p');
const choice_s = document.getElementById('s');
const usersmall = "User".fontsize(2).sub();
const compsmall = "Comp".fontsize(2).sub();
function computerchoice(){
    const options = ['r','p','s'];
    const selected = Math.round((Math.random())*3);
    //console.log(selected);
    return options[selected];
}
function wordconvertor(choice){
    if (choice == 'r') return 'Rock';
    if (choice == 's') return 'Scissor';
    return 'paper'
}
function win(uc, cc){
    ucount++;
    usercount.innerHTML = ucount;
    computercount.innerHTML = ccount;
   
    finalresult.innerHTML = `${wordconvertor(uc)} ${usersmall} beats ${wordconvertor(cc)} ${compsmall} You Won!! &#x1F525`;
}
function loss(uc, cc){
    ccount++
     usercount.innerHTML = ucount;
     computercount.innerHTML = ccount;
     finalresult.innerHTML = `${wordconvertor(uc)} ${usersmall} lost to ${wordconvertor(cc)} ${compsmall} Better luck next time &#x1F610`;
}
function draw(uc, cc){
    
     usercount.innerHTML = ucount;
     computercount.innerHTML = ccount;
     finalresult.innerHTML = `${wordconvertor(cc)} ${usersmall} equals to  ${wordconvertor(uc)} ${compsmall} Its draw!! &#x1F609`;
     
}
function Game(userChoice){
    const cchoice = computerchoice();
    const temp = userChoice + cchoice;
    if (temp == 'pr' || temp == 'sp' || temp == 'rs'){
        win(userChoice, cchoice);
       
    }else if(temp == 'rp' || temp == 'ps' || temp == 'sr'){
        loss(userChoice, cchoice);
    }else if(temp == 'rr' || temp == 'pp' || temp == 'ss'){
        draw(userChoice, cchoice);
    }
        
}


function main(){
   choice_r.addEventListener('click', function(){
       Game('r');
   })
   choice_s.addEventListener('click', function(){
    Game('s');
})
choice_p.addEventListener('click', function(){
    Game('p');
})
}
main();