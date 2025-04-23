let gameseq=[];
let userseq=[];
let allbtns=['yellow','red','purple','green'];
let started=false;
let level=0;
let inx=-1;
let btns =document.querySelectorAll('.btn');
let start=document.querySelector("b");
document.addEventListener("keypress",function(){
    
    if(started!=true){
        console.log("game stated");
        levelup();
    }
    started=true;
})
start.addEventListener("click",function(){
    
    if(started!=true){
        console.log("game stated");
        levelup();
    }
    started=true;
})

function levelup(){
   let lev= document.querySelector("h4")
    level+=1;
    inx=-1;
    userseq=[]
    lev.innerText='Level = '+level;
    let ran=Math.floor(Math.random()*4)
    let btn=document.querySelector("."+allbtns[ran]);
    gameseq.push(allbtns[ran]);
    gamebtnflash(btn);
}
function checkans(inx){
    if(gameseq[inx]===userseq[inx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup(),1000); 
        }
    }
    else{
        let body=document.querySelector("body");
            body.style.backgroundColor='red';
            
        setTimeout(function(){
            body.style.backgroundColor='white';
        },500)
        let lev= document.querySelector("h4")
        lev.innerHTML=`Game Over! Your score was ${level} Press any key to <b>restart</b>`;

        restart();

    }
}

function gamebtnflash(num){
    setTimeout(function(){
        num.classList.add('flash');
        },250)
    setTimeout(function(){
    num.classList.remove('flash');
    },500)
}
function playerbtnflash(num){
    num.classList.add('playerflash');
    setTimeout(function(){
    num.classList.remove('playerflash');
    },200)
}

function buttonpress(){
    let btn=this;
    let user=btn.getAttribute("id");
    playerbtnflash(btn);
    userseq.push(user); 
    
    inx+=1;
    checkans(inx);
  }

for(btn of btns){
    btn.addEventListener('click',buttonpress)
}
   
function restart(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    let start=document.querySelector("b");
    start.addEventListener("click",function(){
    
        if(started!=true){
            console.log("game stated");
            levelup();
        }
        started=true;
    })
}



