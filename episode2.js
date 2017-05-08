score = 5;    //set varable to '5'

var result = function() {
  var score = 3;       //Creating a new varable not effecting the global varable.
  return score;
};

console.log(result()); //Will print out a value of '3'

console.log(score)