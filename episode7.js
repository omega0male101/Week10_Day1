// Quantum Computer State

var superposition = {
  currentState : 0,
  currentState : 1,
  currentState : "1 or 0",
  currentState : "Both"
};

var viewState = function() {
   superposition = 'Both States';

  var possibleState = function() {
     var superposition = '0';
     
    var otherState = function() {
      superposition = '1 or 0';
    }

    superposition = "1"
    otherState();
  }
  possibleState();
}
viewState();

console.log('The current state of the qubit is: ' + superposition);
