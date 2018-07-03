counter = 0;
var wins = 0;
var losses = 0;
$("#wins").text(wins);
$("#losses").text(losses);

$(document).ready(function newGame() {
  //Code for making computer choose the random target number between between 19 and 120
  var minNumber = 19;
  var maxNumber = 120;
  var randomTarget =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  // var randomTarget = Math.floor(
  //   Math.random() * (maxNumber - minNumber + 1) + minNumber
  // );
  console.log(randomTarget);
  $("#target").text(randomTarget);

  //Code for using while loop which will create an array of four numbers between 1 and 12 to assign to the crystals
  var crystalArray = [];
  while (crystalArray.length < 4) {
    var randomCrystalNumber = Math.ceil(Math.random() * 12);
    if (crystalArray.indexOf(randomCrystalNumber) > -1) continue;
    crystalArray[crystalArray.length] = randomCrystalNumber;
  }
  console.log(crystalArray);

  // Below code will assign random number between 1 and 12 to each of the 4 crystals
  $(".crystal").click(function() {
    var clickedImage = $(this).attr("id");
    console.log(crystalArray[clickedImage]);

    // Below code will addup clicked image numbers (this is the users total score)
    var clickedValue = crystalArray[clickedImage];
    counter += clickedValue;
    console.log(counter);

    $("#counter").text(counter);
    // Code to alert, when a player wins or looses
    if (randomTarget === counter) {
      $("#status").text("You WON :)");
      counter = 0;
      ++wins;
      $("#wins").text(wins);

      // To remove the value of the crystal click event, we will use ".off", so that we can reassign a new value to it
      // http://api.jquery.com/off/
      $(".crystal").off();
      newGame();
    } else if (counter >= randomTarget) {
      $("#status").text("YOU LOST :(");
      counter = 0;
      ++losses;
      $("#losses").text(losses);
      $(".crystal").off();
      newGame();
    }
  });
});
