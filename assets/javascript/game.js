
// Here we establish the "targetNumber" (set to 53 in this example).
var targetNumber = 53;

var wins = 0;
var losses = 0;

$("#targetnumber").text(targetNumber);
// Here we created a counter, we'll be using this to track the user's total.
var counter = 0;
var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++){
     var imageCrystal = $("<img>");
     imageCrystal.addClass(".crystal-image");
     $("#crystals").append(imageCrystal);
     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
     
     
     console.log(imageCrystal);



}


$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    // alert("New score: " + counter);
 

    // Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    if (counter === targetNumber) {
        wins++
      // If the numbers match we'll celebrate the user's win.
    //   alert("You win!");
    }
    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {
             losses++
        // Then they are alerted with a loss.
        // alert("You lose!!");
      }

     $("#counter").text(counter);
     $("#wins").text(wins);
     $("#losses").text(losses);
    });
