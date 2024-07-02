let userSeq=[];
let gameSeq=[];
let started=false;
let level=0;
let max=0;
let btns=["red","green","yellow","blue"];
let h2=document.querySelector("h2");
let initial=document.querySelector(".star");

initial.addEventListener("click",function(){
    initial.classList.add("hidden");
    if(started==false){
        console.log("Game has started");
        started=true;
        levelUp();
    }
});

document.addEventListener("keypress",function(){
    initial.classList.add("hidden");
    if(started==false){
        console.log("Game has started");
        started=true;
        levelUp();
    }
});
function btnFlash(btn){
btn.classList.add("gameFlash");
setTimeout(function() {
    btn.classList.remove("gameFlash");
},250);
}
function btnNewFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
    }

function levelUp(){
    userSeq=[];
level++;
if(level>=max){
    max=level;
    }
h2.innerHTML=`Updated to Level ${level} <br>
Highest Score till now is ${max}`;
let ranIndx=Math.floor(Math.random()*3);
let ranCol=btns[ranIndx];
let randBtn=document.querySelector(`.${ranCol}`)
gameSeq.push(ranCol);
btnFlash(randBtn);
console.log(gameSeq);
}

function checkSeq(indx){
if(userSeq[indx]==gameSeq[indx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1500);
    }
}
else {
    h2.innerHTML=`Game Over!! Your scored ${level} <br>Press any key or press button to start New Game.
    <br> Highest Score till now is ${max}`;
    initial.classList.remove("hidden");
    let doc=document.querySelector("body");
    doc.style.backgroundColor="red";
    setTimeout(function(){
        doc.style.backgroundColor="white";
    },1000);
    reset();
}
}
function btnPress(){
    let btn=this;
btnNewFlash(btn);
let newCol=btn.getAttribute("id");
userSeq.push(newCol);
checkSeq(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    level=0;
    userSeq=[];
    gameSeq=[];
    started=false;
}