$(document).ready(function() {
  //Global variables
    var randomNum; //number to match
    var crystalNum= []; //for array of random crystal values
    var totalScore= 0; //user score
    var wins= 0;
      $("#wins").html("<h3>Wins: " + wins + "</h3>");
    var losses= 0;
      $("#losses").html("<h3>Losses: " + losses + "</h3>");
    var crystalNumOption= [1,2,3,4,5,6,7,8,9,10,11,12];

    //reset function  
    function initializeCrystals(){
        totalScore="";
        randomNum="";
        crystalNum="";
        crystalNumOption="";
        $("#totalScore, #totalNumber").empty();
    }
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
     });
    
        //this happens if user wins
    $("#button").on("click", function(){
        if(totalScore === randomNum){
            alert("You Win!!!")
            wins++;
            console.log("You Win!!!")
            $("#wins").html("<h3>Wins: " + wins + "</h3>");
            initializeCrystals();
    } else if(totalScore > randomNum) {
        alert("You lost!!!");
        console.log("You lost")
        losses++;
        $("#losses").html("<h3>Losses: " + losses + "</h3>");
        initializeCrystals();
        }
    
    });
    $("#clearButton").on("click", function(){
      initializeCrystals();    
  });      
});