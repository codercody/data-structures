var BinarySearchTree = function(value){
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;
  _.extend(obj, methods);

  return obj;
};

var methods = {};

methods.insert = function(val){
  if(val < this.value){ //going left
    //if left child exists
    if(this.left){
      this.left.insert(val);
    } else {
      this.left = BinarySearchTree(val);
    }
  } else { //going right
    //move down to the right child, if one exists
    if(this.right){
      this.right.insert(val);
    } else {
      this.right = BinarySearchTree(val);
    }
  }
};

methods.contains = function(val){
  if(val < this.value){
    if(this.left){
      return this.left.contains(val);
    } else {
      return false;
    }
  } else if(val > this.value) {
    if(this.right){      
      return this.right.contains(val);
    } else {
      return false;
    }
  } else {
    return true;
  }

};




 // var contains = false;
 // function traverser (node){
 //  if(node.left || node.right){
 //    if(node.value ===val){
 //      contains = true;
 //    }
 //    else {
 //      traverser(node.left || node.right);
 //    }
 //  }
 // };
 // traverser(this);
 // return contains;

methods.depthFirstLog = function(callback){
  //go down left child if one exists
  callback(this.value);
    if(this.left){
      this.left.depthFirstLog(callback);
    } 
    if(this.right){
      this.right.depthFirstLog(callback);
    } 
  //go down right child if one exists
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//insert O(n squared)
//contains O(n squared)
//depthFirstLog O(n squared)
