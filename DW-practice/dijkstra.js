function ShortestPath(graph) {

this.graph = graph;

var INF = Number.MAX_SAFE_INTEGER;


this.dijkstra = function(src){

//Consider using heap strutcture instead of arrays
var Heap = require('../../data-structures/heap.js').Heap;
var current;
var visited;
var distance;
var unvisited;

    var dist = [],
        visited = [],
        length = this.graph.length;

    for (var i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }

    dist[src] = 0;

    for (var i = 0; i < length-1; i++){

        var u = minDistance(dist, visited);

        visited[u] = true;

        for (var v = 0; v < length; v++){
            if (!visited[v] && this.graph[u][v]!=0 && dist[u] != INF && dist[u]+this.graph[u][v] < dist[v]){
                dist[v] = dist[u] + this.graph[u][v];
            }
        }
    }

    return dist;
};

var minDistance = function(dist, visited){

      var min = INF,
          minIndex = -1;

      for (var v = 0; v < dist.length; v++){
          if (visited[v] == false && dist[v] <= min){
              min = dist[v];
              minIndex = v;
          }
      }

      return minIndex;
  };

}
