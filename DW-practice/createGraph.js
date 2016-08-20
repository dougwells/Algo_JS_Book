var Dictionary = require(../chapter07/01-Dictionaries.js);


var Graph = function(){
  var vertices = [];
  var adjList = new Dictionary();

  this.addVertex = function(v){
    vertices.push(v);
    adjList.set(v,[]);
  };
}
