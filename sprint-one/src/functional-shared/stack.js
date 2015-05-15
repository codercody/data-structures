var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.position = 0;
  newStack.storage = {};
 _.extend(newStack, stackMethods);

  //reference .push in order to make stackmethods
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(inp){
  this.storage[this.position] = inp;
  this.position++;
};

stackMethods.pop = function() {
  this.position--;
  var store = this.storage[this.position];
  delete this.storage[this.position];
  return store;
};

stackMethods.size = function(){ 
 if(this.position < 0)
  return 0;
 return this.position;
};