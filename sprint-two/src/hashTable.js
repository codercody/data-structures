//non linked list almost working version (no collision handling)

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(i) = v;
  if (!this._storage.get(i)){
    this._storage.set(i,[]); 
  }
    var temp = this._storage.get(i); 
    temp.push([k, v]); 
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j =0; j < this._storage.get(i).length; j++){
    if(this._storage.get(i)[j][0] === k) {
      return this._storage.get(i)[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)) {
  for (var j =0; j < this._storage.get(i).length; j++){
    if(this._storage.get(i)[j][0] === k) {
      var temp = this._storage.get(i)[j];
      temp[1] = null;
      }
    }
  }
};


var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

 // Insert O(1)
 // Retrieve O(n)
 //Remove O(n)
 //Node O(1)
