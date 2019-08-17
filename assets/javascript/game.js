$(document).ready(function() {

    var random = Math.floor(Math.random()*102+19);



$("#numberWins").text(wins);
$("#numberLosses").text(losses);
var crystalValues = {};
crystalValues[1] = Math.floor(Math.random()*12+1);
crystalValues[2] = Math.floor(Math.random()*12+1);
crystalValues[3] = Math.floor(Math.random()*12+1);
crystalValues[4] = Math.floor(Math.random()*12+1);

$("#crystalValues").text(random);
var userTotal= 0;
var wins = 0;
var losses = 0;


function getCrystalHandler(crystalKey) {
   return function() {
    userTotal = userTotal + crystalValues[crystalKey];
    console.log("New userTotal " + userTotal);
    $("#score").text(userTotal);

    if (userTotal === random) {
        winner()
    }

    else if (userTotal > random) {
        loser()
    } 
}
}

$("#image1").on("click", getCrystalHandler(1));
$("#image2").on("click", getCrystalHandler(2));
$("#image3").on("click", getCrystalHandler(3));
$("#image4").on("click", getCrystalHandler(4));


function reset() {
random = Math.floor(Math.random()*102+19);
console.log(random);
$("#crystalValues").text(random);
var num1 = Math.floor(Math.random()*12+1);
var num2 = Math.floor(Math.random()*12+1);
var num3 = Math.floor(Math.random()*12+1);
var num4 = Math.floor(Math.random()*12+1);
userTotal = 0;
$("#score").text(userTotal);
}

function winner() {
alert("You Won!!");
wins++;
$("#numberWins").text(wins);
reset();
}

function loser() {
    
losses++;
$("#numberLosses").text(losses);
reset();
}


$("#image1").on("click", getCrystalHandler(1));
$("#image2").on("click", getCrystalHandler(2));
$("#image3").on("click", getCrystalHandler(3));
$("#image4").on("click", getCrystalHandler(4));
});