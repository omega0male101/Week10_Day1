var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc'; //Creates New Var named 'marc'

  var innerFunction = function() {
    murderer = 'valerie';  //Override Global Var 'rick' with valerie
  }

  innerFunction();
}

outerFunction(); //Should print 'valerie'
console.log('the murderer is ', murderer); //Should be rick