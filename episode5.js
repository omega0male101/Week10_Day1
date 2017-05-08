var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name //Will return the name key value in detective hash.
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'  //Will update hash name to "Poirot"
  return printName(detective);
};

console.log(detectiveInfo()); //Will print out update detective name. "Poirot"