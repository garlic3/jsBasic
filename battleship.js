var randomlc = Math.floor(Math.random()*7);

var location1 = randomlc;
var location2 = location1 + 1;
var location3 = location2 + 1;

// var locationArr = [];
// locationArr[0] = 3;
// locationArr[1] = 4;
// locationArr[2] = 5;

var guess;

var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6): 20 Seominseong ");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses += 1;

    // if (locationArr.includes(guess)){
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits += 1;

      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } 
    else {
        alert("MISS!");
    }
  }
}

var stats =
  "You took " +
  guesses +
  " guesses to sink the battleship, " +
  "which means your shooting accuracy was " +
  3 / guesses;
alert(stats);


