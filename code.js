//sources used:
//https://en.wikipedia.org/wiki/Cycle_(graph_theory)#Cycle_detection
//https://en.wikipedia.org/wiki/Depth-first_search#Output_of_a_depth-first_search
//using adjacency list
function cycleSearch(g, v, visited, pathStack) {
  if (pathStack[v]) { return true; }
  if (visited[v]) { return false; }

  visited[v] = true;
  pathStack[v] = true;

  for (var i = 0; i < g[v].length; i++) {
    if (cycleSearch(g, g[v][i], visited, pathStack)) { return true; }
  }

  pathStack[v] = false;
  return false;
 

}

function hasCycle(g) {
  var visited = new Array(g.length).fill(false);
  var pathStack = new Array(g.length).fill(false);

  for (var i = 0; i < g.length; i++) {
    if (!visited[i] && cycleSearch(g, i, visited, pathStack)) {
      return true;
    }
  }
  return false;
}
