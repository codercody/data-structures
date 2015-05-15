var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.last = 0;
};

Stack.prototype.push = function(value){
   this.storage[this.last] = value;
   this.last++;
};

Stack.prototype.pop = function (){
   this.last--;
   var temp = this.storage[this.last];
   delete this.storage[this.last];
   return temp;
};


Stack.prototype.size = function(){
  if(this.last < 0)
    return 0;
  return this.last;
};



