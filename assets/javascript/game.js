$(document).ready(function() {

//sets variable crystalValues to random number globally
let crystalValue1 = 0;
let crystalValue2 = 0;
let crystalValue3 = 0;
let crystalValue4 = 0;
resetCrystalValue();
let wins = 0;
let losses = 0;
let myScore = 0;



//add a global variable for myscore then in the onclick to the image to += plus the number generated and print to score html box
function resetCrystalValue (){
    crystalValue1 = Math.floor(Math.random()*12+1);
    crystalValue2 = Math.floor(Math.random()*12+1);
    crystalValue3 = Math.floor(Math.random()*12+1);
    crystalValue4 = Math.floor(Math.random()*12+1);
}

function crystals(crystalValue){
    myScore += crystalValue; 
    $("#score").text(myScore);
    reset();
}

$("#image1").click(function (){
    crystals(crystalValue1);
});

$("#image2").click(function(){
    crystals(crystalValue2);
});

$("#image3").click(function(){
    crystals(crystalValue3);
});

$("#image4").click(function(){
    crystals(crystalValue4);
});


// this generates a random number into the matchNumber box every time I refresh the page

function getNumber() {
 let random = Math.floor(Math.random()*121+19);
return random;

}

let matchNumber = getNumber();
$('#randomNumber').html(matchNumber);

//reset and win/lose code
function reset(){
    if (matchNumber === myScore) {
        wins++;
        $("#wins").html("Wins: " + wins);
        scoreReset();
        
    } else if (matchNumber < myScore) {
        losses++;
        $("#losses").html("Losses: " + losses);
        scoreReset();

    }
}
function scoreReset(){
    myScore = 0;
    $("#score").text(myScore);
    matchNumber = getNumber();
    $('#randomNumber').html(matchNumber);
    resetCrystalValue();
}
});


