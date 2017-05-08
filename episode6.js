var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc'; //Creates New Var named 'marc'

  var innerFunction = function() {
    murderer = 'valerie';  //Override Global Var 'rick' with valerie
  }

  innerFunction();
}

outerFunction(); //Update murderer varable
console.log('the murderer is ', murderer); //Should be rick