var counter = 0;
var wins = 0;
var losses = 0;
$("#crystal").append("<img src='assets/images/blue-gem.png' data-crystalvalue='10' class='crystal-image'/>");
$("#crystal2").append("<img src='assets/images/red-gem.png' data-crystalvalue='5' class='crystal-image'/>");
$("#crystal3").append("<img src='assets/images/green-gem.png' data-crystalvalue='3' class='crystal-image'/>");
$("#crystal4").append("<img src='assets/images/yellow-gem.png' data-crystalvalue='7' class='crystal-image'/>");
var targetNumber = getRandom();


$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#total_value").text("Total Value: " + counter);
    if (counter === targetNumber) {
        alert("You win!");
        wins = wins + 1;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        reset();
        targetNumber = getRandom();

    }
    else if (counter >= targetNumber) {
        alert("You lose!!");
        losses = losses + 1;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        reset();
        targetNumber = getRandom();
    }
});

function reset() {
    document.getElementById("total_value").innerHTML = "Total Value: 0";
    counter = 0;
    var targetNumber = getRandom();
    return targetNumber;
}

function getRandom(){
    var targetNumber = Math.floor(Math.random()* 100);
    $("#number-to-guess").text(targetNumber);
    return targetNumber;
}

function onLoad(){
    document.getElementById("wins").innerHTML = "Wins: ";
    document.getElementById("losses").innerHTML = "Losses";
    document.getElementById("total_value").innerHTML = "Total Value: 0";
}
