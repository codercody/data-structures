var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  
  newStack.position = 0;
  newStack.storage = {};

  return newStack;

};

var stackMethods = {};

stackMethods.push = function(value){
  
  this.storage[this.position] = value;
  this.position++;
};

stackMethods.pop = function(){
  this.position--;
  var temp = this.storage[this.position];
  delete this.storage[this.position];
  return temp;
};

stackMethods.size = function(){
  if(this.position < 0){
    return 0;
  }
  return this.position;
};