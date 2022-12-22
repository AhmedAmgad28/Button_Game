let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let maintimer=document.getElementById("maintimer");
let P1Title=document.getElementById("TP1");
let P2Title=document.getElementById("TP2");
var disp1=document.getElementById("display1");
var disp2=document.getElementById("display2");
let P1Score = 0;
let P2Score = 0;
// let P1time = 5;
// let P2time = 5;
// var timer1=document.getElementById("timer1");
// var timer2=document.getElementById("timer2");
let logbtn1 = document.getElementById("Log1");
let logbtn2 = document.getElementById("Log2");

function P1logout(){
    if (logbtn1.innerHTML == 'Log Out'){
        logbtn1.innerHTML = 'Log in';
        p1.disabled=true;
        alert("Caution !!!! , Player 1 You have 5 Seconds to log in again or you will considered loser");
    }
    else {
        logbtn1.innerHTML = 'Log Out';
        p1.disabled=false;
    }
};
function P2logout(){
    if (logbtn2.innerHTML == 'Log Out'){
        logbtn2.innerHTML = 'Log in';
        p2.disabled=true;
        alert("Caution !!!! , Player 2 You have 5 Seconds to log in again or you will considered loser");
    }
    else {
        logbtn2.innerHTML = 'Log Out';
        p2.disabled=false;
    }
};


function Game(){
    let gametime = prompt("Enter match time (in seconds)");
    confirm("Note that your turn is 5 seconds only , if you did not click the button you will not get a point");
    alert("Game started");

    function Swap(p){
        if (p == p1){
            p1.disabled=true;
            p2.disabled=false;
        }
        else if (p == p2){
            p2.disabled=true;
            p1.disabled=false;
        }
    }

    p1.addEventListener("click",function(){
        P1Score = P1Score + 1 ;
        disp1.innerHTML=P1Score;
        Swap(p1);
    });
    p2.addEventListener("click",function(){
        P2Score  = P2Score + 1 ;
        disp2.innerHTML=P2Score;
        Swap(p2);
    });

    // function P1CountDown(){
    //     P1time -=1;
    //     timer1.innerHTML=P1time;
    //     if(P1time == -1){
    //         timer1.innerHTML=0;
    //         clearInterval(P1counter);
    //         P1Score -=1;
    //     }
    // }
    // let P1counter = setInterval(P1CountDown,1000);

    // function P2CountDown(){
    //     P2time -=1;
    //     timer2.innerHTML=P1time;
    //     if(P2time == -1){
    //         timer2.innerHTML=0;
    //         clearInterval(P2counter);
    //         P2Score -=1;
    //     }
    // }
    // let P2counter = setInterval(P2CountDown,1000);


    function countdown(){
        gametime -=1;
        maintimer.innerHTML=gametime;
        if(gametime == 0){
            maintimer.innerHTML=gametime;
            clearInterval(counter);
            p1.disabled=true;
            p2.disabled=true;
            if(P1Score > P2Score){
                alert("Player 1 WON !!!");
                P1Title.innerHTML="WINNER !!!";
            }
            else if(P2Score > P1Score){
                alert("Player 2 WON !!!");
                P2Title.innerHTML="WINNER !!!";
            }
            else{
                alert("DRAW !!!")
                P1Title.innerHTML="!! Draw !!";
                P2Title.innerHTML="!! Draw !!";
            }
        }
    }
    let counter = setInterval(countdown,1000);
}