var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions']; //This overrides Glob Varble with this new array.
  for(var i=0;i<myAnimals.length; i++){   //Loops array
    console.log(i + ": " + myAnimals[i]); //Prints Key position with value
  }
}

listAnimals();
