var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var position = 0;
  var index = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    console.log(storage, position, value);
    storage[position] = value;
    position++;
  };

  someInstance.dequeue = function(){
    var temp = storage[index];
    // console.log('storage:', storage);
    // console.log('line 18:' + storage[index]);
    delete storage[index];
    index++;
    return temp;
  };
//{{"1": 'b', "2":'c'}}
  someInstance.size = function(){
    if (position - index <0){
      return 0;
    }
    return position - index;
  };

  return someInstance;
};

