$(document).ready(function(){

var targetNumber = "";
var wins = 0;
var losses = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;


function initial(){
    targetNumber = Math.floor(Math.random()*101)+19;
    counter = 0;
    var imageCrystal = [$(".crystal1"), $(".crystal2"), $(".crytal3"), $(".crytal4")];
    var clickOptions = [crystal1, crystal2, crystal3, crystal4];

for (var i = 0; i <imageCrystal.length; i++){
    clickOptions[i]=imageCrystal[i].attr("data-crystalvalue", Math.round(Math.random()*12)+2);
     $("#crystals").append(imageCrystal);
     $("#targetnumber").text(targetNumber);
     $("#counter").text(counter);
     $("#wins").text(wins);
     $("#losses").text(losses);
     
};
};

initial();


$(".crystal-image").on("click", function(){
    counter += parseInt($(this).attr("data-crystalvalue"));
    $("#counter").text(counter);
    
    if (counter === targetNumber) {
        wins++;
        initial();
          
}
    else if (counter > targetNumber) {
             losses++;
             initial();
}
     
});
$(".crystal-1").on("click", function(){
    $(".crystal-1").animate({opacity: "0.4"});
    $(".crystal-1").animate({opacity: "1"});   
});
$(".crystal-2").on("click", function(){
    $(".crystal-2").animate({opacity: "0.7"});
    $(".crystal-2").animate({opacity: "1"});
});
$(".crystal-3").on("click", function(){
    $(".crystal-3").animate({opacity: "0.3"});
    $(".crystal-3").animate({opacity: "1"});
});
$(".crystal-4").on("click", function(){
    $(".crystal-4").animate({opacity: "0.0"});
    $(".crystal-4").animate({opacity: "1"});
});
});