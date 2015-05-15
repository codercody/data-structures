var Stack = function(){
  var someInstance = {
  };
  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  // Implement the methods below
  someInstance.push = function(value){
    storage[index] = value;
    index++;
  }

  someInstance.pop = function(){
    console.log(storage, index);
    var temp = storage[index - 1];
    delete storage[index];
    index--;
    return temp;
  };

  someInstance.size = function(){
    if (index < 0){
      return 0;
    }
    return index;
  };
console.log(someInstance);
  return someInstance;
};

