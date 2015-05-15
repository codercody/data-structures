var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; //fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree();
  tree.value = value;
  this.children.push(tree);
};

treeMethods.contains = function(target){
  var contains = false;
  function recursor(tree){
    if(tree.value === target){
      contains = true;
    } else {
      for(var i = 0; i < tree.children.length; i++){
        recursor(tree.children[i]);
      }
    }
  }
  recursor(this);
  return contains;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
//O(1) for addChild
//0(n) for contains