$(document).ready(function() {

//sets variable crystalValues to random number globally
let crystalValue1 = Math.floor(Math.random()*12+1);
let crystalValue2 = Math.floor(Math.random()*12+1);
let crystalValue3 = Math.floor(Math.random()*12+1);
let crystalValue4 = Math.floor(Math.random()*12+1);

let myScore = (0);

//add a global variable for myscore then in the onclick to the image to += plus the number generated and print to score html box

$("#image1").click(function (){
  myScore += crystalValue1; 
  $("#score").text(myScore);
});

$("#image2").click(function(){
    myScore += crystalValue2;
    $("#score").text(myScore);
});

$("#image3").click(function(){
    myScore += crystalValue3;
    $("#score").text(myScore);
});

$("#image4").click(function(){
    myScore += crystalValue4;
    $("#score").text(myScore);
});


// this generates a random number into the matchNumber box every time I refresh the page

function getNumber() {
 let random = Math.floor(Math.random()*121+19);
return random;

}

let matchNumber = getNumber();
$('#randomNumber').html(matchNumber);

});


// let crystalValue1 = crystalNumber();
// $('#score').html(crystalValue1);
// $("#image1").on("click", (crystalValue1));

// $("#numberWins").text(wins);
// $("#numberLosses").text(losses);


// $("#crystalValues").text(randomNumber);
// var userTotal= 0;
// var wins = 0;
// var losses = 0;


// function getCrystalHandler(crystalKey) {
//    return function() {
//     userTotal = userTotal + crystalValues[crystalKey];
//     console.log("New userTotal " + userTotal);
//     $("#score").text(userTotal);

//     if (userTotal === randomNumber) {
//         winner()
//     }

//     else if (userTotal > randomNumber) {
//         loser()
//     } 
// }
// }


// function reset() {
// randomNumber = Math.floor(Math.random()*100+1);
// console.log(random);
// $("#crystalValues").text(randomNumber);
// var num1 = Math.floor(Math.random()*10+1);
// var num2 = Math.floor(Math.random()*10+1);
// var num3 = Math.floor(Math.random()*10+1);
// var num4 = Math.floor(Math.random()*10+1);
// userTotal = 0;
// $("#score").text(userTotal);
// }

// function winner() {
// alert("You Won!!");
// wins++;
// $("#numberWins").text(wins);
// reset();
// }

// function loser() {
// alert("You Lost!!");
// losses++;
// $("#numberLosses").text(losses);
// reset();
// }

