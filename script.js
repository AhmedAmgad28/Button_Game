let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let maintimer=document.getElementById("maintimer");
let P1Title=document.getElementById("TP1");
let P2Title=document.getElementById("TP2");
var disp1=document.getElementById("display1");
var disp2=document.getElementById("display2");
let P1Score = 0;
let P2Score = 0;
let ptime = 5;
let logbtn1 = document.getElementById("Log1");
let logbtn2 = document.getElementById("Log2");
//let P1time = document.getElementById("displayT1");
//let P2time = document.getElementById("displayT2");
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
function logout(){

}
// //Get Score for each player
// var count1=0;
// var count2=0;
// var disp1=document.getElementById("display1");
// var disp2=document.getElementById("display2");
// function button1(){
//     count1++;
//     disp1.innerHTML=count1;
// };
// function button2(){
//     count2++;
//     disp2.innerHTML=count2;
// };


function Game(){
    let gametime = prompt("Enter match time (in seconds)");
    confirm("Note that your turn is 5 seconds only , if you did not click the button you will not get a point");
    alert("Game started");

    function countdown(){

        p1.addEventListener("click",function(){
            P1Score +=1;
            disp1.innerHTML=P1Score;
        });
        p2.addEventListener("click",function(){
            P2Score +=1;
            disp2.innerHTML=P2Score;
        });
        gametime -=1;
        maintimer.innerHTML=gametime;
        if(gametime == 0){
            maintimer.innerHTML=gametime;
            clearInterval(counter);
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

    // function Playertime(p){ 
    //     ptime -=1;
    //     turn(p);
    //     console.log(`Player timer ${ptime}`)
    //     if(ptime == 0){
    //         clearInterval(PlayerCounter);
    //     }
    // }
    // let PlayerCounter = setInterval(Playertime(1),1000);
    
    // // var player = 1;
    // function turn(player){
    //     if( player == 1){
    //         p1.addEventListener("click",function(){
    //             P1Score += 1 ;
    //             clearInterval(PlayerCounter);
    //         });
    //         player=2;
    //     }
    //     else{
    //         p2.addEventListener("click",p2turn);
    //         player=1
    //     }
    // }

}