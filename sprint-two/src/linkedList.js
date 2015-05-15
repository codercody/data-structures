var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
 // reference Node and pass in value to latest Node/next\
    var node = Node(value);
    if (list.tail){
      list.tail.next = node;
    } 
    list.tail = node;
    if (list.head === null){
      list.head = list.tail;}
  };

  list.removeHead = function(){
    //temp var for current head
    var temp = list.head.value;
    // delete current head
    list.head = list.head.next;
    // move head to new first node
    //return temp var
    return temp;
  };

  list.contains = function(target){
    // target === currentNode.value return true
    var contains = false;
    function recursor(node){
      if(node.value === target){
        contains = true;
      } else {
        if(node.next)
          recursor(node.next);
      }
      //recursive call to list.contains unless list.head.next threequals list.tail
    }
    recursor(list.head);
    return contains;
  };

  return list;
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

 //O(n) for insertion/removal without a reference
 //0(1) if have a reference
