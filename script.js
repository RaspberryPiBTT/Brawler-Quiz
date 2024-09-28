//Generate a random number between 0 and 3
var random_number = Math.floor(Math.random() * 4);

//Create a list with all possible brawlers they can guess
var guessable_brawlers = ["Buzz", "EMZ", "Edgar", "Frank"];
var attack_list = ["Torpedo Throw","Toxic","Scarf","Fight Club"];
var hair_color_list = ["Green","Purple","Blue","Purple"];
var skin_color_list = ["Green","Purple","White","Gray"];
var rarity_list = ["Mythic","Epic","Epic","Epic"];
var trio_list = ["Waterpark","Undead","Gift Shop","Undead"];
var picture_list = ["","","",""];

//Create an empty variable to hold the brawler you want to guess.
var brawler = guessable_brawlers[random_number];
var attack = attack_list[random_number];
var hair_color = hair_color_list[random_number];
var main_attack = main_attack_list[random_number];
var skin_color = skin_color_list[random_number];
var character_class = character_class_list[random_number];
var rarity = rarity_list[random_number];
var trio = trio_list[random_number];
var picture = picture_list[random_number];

//Check if the brawler they guessed is correct
function checkGuess() {
  document.getElementById("fname").innerHTML = "FILLER TEXT HERE";
  
  var guess = document.getElementById("character-guessed").value;
  if (guess == brawler) {
    document.getElementById("myresults").innerHTML =
      "CORRECT";
    console.log("CORRECT");
  } else {
    document.getElementById("myresults").innerHTML =
      "INCORRECT";
    console.log("INCORRECT");
  }
}
