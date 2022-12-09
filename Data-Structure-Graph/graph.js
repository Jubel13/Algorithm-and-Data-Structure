//? Graph have nodes and edges (line that connect node)

//? There are 2 type of graph:
//* directed => can't go bidirectional
//* undirected => can go bidirectional

//? another way to describe graph (can have values on the edges)
//* unweighted
//* weighted

//? another way to describe graph (if graph can be circular, go to the first node)
//* cyclic
//* acyclic

//! How to build graph/represent graph
//?       2 ----- 0
//?     /   \
//?    1     3
//* 1. Edge List => just show the connection in arrays:
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

//* 2. Adjaceent list => where the index is the node, and the value is the node nieghbours
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]]; //? => index of 0 or node 0 connected to 2, index of 1 connected to node 2 and 3, and so on

//* 3. Adjacent matrix => meaning that node 0 connected to node 2, and so on
const graph3 = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};

//! link to graph visualization

let link = 'https://visualgo.net/en/graphds';
