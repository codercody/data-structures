var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.first = 0;
  newQueue.last =0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.last] = value;
  this.last++;
};
queueMethods.dequeue = function()  {
  var temp = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return temp;
};
queueMethods.size = function(){
  if (this.last - this.first < 0) {return 0;}
  return this.last - this.first;
};




