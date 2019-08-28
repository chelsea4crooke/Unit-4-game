$(document).ready(function() {
    //number array

    //random computer variable array
    var randomNum= [];
    for(var i = 19; i < 121; i++){
        randomNum.push(i);
    }
    // crystal number array
    var crystalNum= [];
    for(var j = 1; j < 13; j++){
        crystalNum.push(j);
    }
    console.log(crystalNum);
    console.log(randomNum);

     //Global variables
    // Random variables selected by computer
    var randomNum; //number to match
    var crystalNum= []; //for array of random crystal values
    var c1; //crystal image 1
    var c2; // crystal image 2
    var c3; //crystal image 3
    var c4; //crystal image 4
    var totalScore = 0; //user score
    var wins= 0;
    var losses= 0;
    var crystalNumOption= [1,2,3,4,5,6,7,8,9,10,11,12];


     //Function
    // pick random number
    function pickRandomNumber(compArr){
        var x= compArr[Math.floor(Math.random() * compArr.length)];
        randomNum = x;
        $("#totalNumber").html(randomNum);
        console.log("totalNumber: " + randomNum);
        
        for(var m= 0; m < 4; m++){
            var n= crystalNumOption[Math.floor(Math.random() * crystalNumOption.length)];
            $("#button" + (m+1)).attr("value", n);
         }    
         console.log(crystalNum); 
    };
        console.log("crystalNum: " + crystalNum);
       
        //function crystalValues(arr){
            // change value of each crystal button according to array
          //  for(var p = 0; p < 4; p++){
                // $("#button" + (p+1)) .attr("value", crystalNumOption[p]);
            // }
        // }
        // end of crystalValues function
        
        function gameReset(x){
            crystalNum = []; //clears crystal number values
            pickRandomNumber(randomNum);
            crystalValues(crystalNum);
            totalScore = 0;
            $("#totalNumber").html(totalScore);
            alert(x);
        }// end gameReset function
        //game settings at start
        pickRandomNumber(randomNum); //random number to match        
        //crystal button functions
        
    $("#button1").on("click", function(){
        buttonScore = $("#button1").attr("value");
        totalScore += parseInt(buttonScore);
        console.log("totalScore " + totalScore);
        $("#totalScore").html(totalScore);
        console.log("buttonScore " + buttonScore);
    });

    $("#button2").on("click", function(){
        buttonScore = $("#button2").attr("value");
        totalScore += parseInt(buttonScore);
        console.log("totalScore " + totalScore);
        $("#totalScore").html(totalScore);
        console.log("buttonScore " + buttonScore);
    });

    $("#button3").on("click", function(){
        buttonScore = $("#button3").attr("value");
        totalScore += parseInt(buttonScore);
        console.log("totalScore " + totalScore);
        $("#totalScore").html(totalScore);
        console.log("buttonScore " + buttonScore);
    });

    $("#button4").on("click", function(){
        buttonScore = $("#button4").attr("value");
        totalScore += parseInt(buttonScore);
        console.log("totalScore " + totalScore);
        $("#totalScore").html(totalScore);
        console.log("buttonScore " + buttonScore);
    
    
        //this happens if user wins
        if(totalScore === randomNum){
            alert("You Win!!!")
            wins++;
            console.log(totalScore);
            $("#totalScore").html(totalScore);
            $("#wins").text(wins);
            restart();
            // setTimeout(function(){
                // gameReset("You Win!!")},200);
        } else if(totalScore != randomNum) {
            alert("You lost!!!");
            alert("Refresh page to play again");
            console.log("You lost")
            losses++;
            $("#losses").text(losses);
            restart();
   // setTimeout(function(){
               // gameReset("Womp-Womp...You lose")}, 200);
        }
    });
});