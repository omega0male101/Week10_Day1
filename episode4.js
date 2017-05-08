var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey' //Create new var, doesnt effect global varable
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour) //Should print out 'Harvey' instead 'Keith'
};

allSuspects(); //Will print all out all suspects with Keith replaced with Harvey
console.log( 'Suspect three is:' + suspectThree ); //Should be Keith "'Suspect three is:Keith"