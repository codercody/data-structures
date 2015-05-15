

var Graph = function(){
// var xyz = Object.prototype(Graph);
// return xyz;
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
  
}
Graph.prototype.contains = function(node){
  for(var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i] === node)
      return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  return this.nodes.pop();

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var edge = [fromNode, toNode]; 
  for(var i = 0; i < this.edges.length; i++){
      for(var j = 0; j < this.edges[i].length; j++){
        if(this.edges[i][j][0] === fromNode && this.edges[i][j][1] === toNode){
          return true;
        }
      }
  }  
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var edge = [[fromNode, toNode], [toNode, fromNode]];
  this.edges.push(edge);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i = 0; this.edges.length; i++){
    if(this.edges[i][0] === fromNode && this.edges[i][1] === toNode){
      this.edges.splice(i, 1);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node){
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//Add node O(1)
//Contrains O(N)
//Remove O(N)
// HasEdge O(n^2)
// Add Edge O(1)
// Remove Edge O(N)
// For Each O(N)


