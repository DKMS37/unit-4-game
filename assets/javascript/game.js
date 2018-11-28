// Here we created a counter, we'll be using this to track the user's total.
var counter = 0;


$(".crystal-image").on("click", function() {
    // Each time the user clicks the crystal the counter goes up by 1.
    counter += 1
    // We then output the number of times the crystal is clicked.
    alert("You clicked a crystal!" + counter + " times!");
 
 
 
 
    $("#counter").html(counter);
  });

  