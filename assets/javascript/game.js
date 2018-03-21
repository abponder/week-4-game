

// List of Words only
var wins = 0;
var losses = 0;
var score = 0;
var scoreDisplay = 0;
var crystalValue = 0;
//var targNum = 55;
var crystalRed = 0;
var crystalBlue = 0;
var crystalYellow = 0;
var crystalGreen = 0;

var crystalMin = 1;
var crystalMax = 12;
var targetMax = 120
var targetMin = 19
var lockGame = false;


    // Initial Variables
    var targNum = Math.floor((Math.random() * (targetMax - targetMin +1 )) + targetMin);
    document.getElementById("targNum").innerHTML = targNum;
    // set red to a random number
    crystalRed = Math.floor((Math.random() * crystalMax) + crystalMin);
    document.getElementById("cryred").innerHTML = crystalRed;
    // set red to a random number
    crystalBlue = Math.floor((Math.random() * crystalMax) + crystalMin);
    document.getElementById("cryblu").innerHTML = crystalBlue;
    // set red to a random number
    crystalYellow = Math.floor((Math.random() * crystalMax) + crystalMin);
    document.getElementById("cryyel").innerHTML = crystalYellow;
    // set red to a random number
    crystalGreen = Math.floor((Math.random() * crystalMax) + crystalMin);
    document.getElementById("crygrn").innerHTML = crystalGreen;


   
  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".thumbnail a").on("click", ".crystal-image", function() {
 
            console.log(crystalRed)
            console.log($(this).attr("alt"))
            console.log(crystalBlue)
            console.log($(this).attr("alt"))
            console.log(crystalYellow)
            console.log($(this).attr("alt"))
            console.log(crystalGreen)
            console.log($(this).attr("alt"))

            var crystalValue = ($(this).attr("data-crystalvalue")); //data-crystalvalue
            crystalValue = parseInt(crystalValue);
            // We then add the crystalValue to the user's "counter" which is a global variable.
            // Every click, from every crystal adds to the global counter.
            score += crystalValue;
    if (lockGame !== true) {
     // Update score
     document.getElementById("score").innerHTML = score;

     // With each click the counter will increase by 10 and be re-evaluated against target.
     if (score === targNum) {
     // If the numbers match we'll celebrate the user's win.
     document.getElementById("winLose").innerHTML = "You Win!!! You hit the target number of: " + targNum;
     score = 0;
     document.getElementById("score").innerHTML = score;
     wins = 1;
     document.getElementById("wins").innerHTML = wins;
     lockGame = true;
      }
    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
     else if (score >= targNum) {
        document.getElementById("winLose").innerHTML = "You Lose!!! You're over the target number of: " + targNum;
        score = 0;
        document.getElementById("score").innerHTML = score;
        losses = 1;
        document.getElementById("losses").innerHTML = losses;
        lockGame = true;
        }
    }


    // // Run game
    //   reset();
  });


 







// Generate random number limited by array length or max number:
    //var targetNum = Math.floor((Math.random() * targetMax) + targetMin);
    //document.getElementById("targNum").innerHTML = targetNum;


    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("score").innerHTML = score;











  

  
// Start Clock Function

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// End Clock Function


