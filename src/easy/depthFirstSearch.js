const depthFirstSearchHelper = (graph, values) => {
  values.push(graph.value);
  for (let i = 0; i < graph.children.length; i += 1) {
    depthFirstSearchHelper(graph.children[i], values);
  }
  return values;
};

const depthFirstSearch = (graph) => {
  const values = [];
  return depthFirstSearchHelper(graph, values);
};

module.exports = depthFirstSearch;
