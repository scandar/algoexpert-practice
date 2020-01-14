/* eslint-disable max-len */
// recursive
const closestValueInBSTHelperRecursive = (tree, target, closestValue) => {
  let closest = closestValue;
  if (!tree) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) closest = tree.value;
  if (target < tree.value) return closestValueInBSTHelperRecursive(tree.left, target, closest);
  if (target > tree.value) return closestValueInBSTHelperRecursive(tree.right, target, closest);
  return closest;
};

// iterative
const closestValueInBSTHelperIterative = (tree, target, closestValue) => {
  let closest = closestValue;
  let node = tree;
  while (node) {
    if (Math.abs(target - closest) > Math.abs(target - node.value)) closest = node.value;
    if (target < node.value) node = node.left;
    else if (target > node.value) node = node.right;
  }
  return closest;
};

const closestValueInBSTRecursive = (tree, target) => closestValueInBSTHelperRecursive(tree, target, Infinity);
const closestValueInBSTIterative = (tree, target) => closestValueInBSTHelperIterative(tree, target, Infinity);


module.exports = { closestValueInBSTRecursive, closestValueInBSTIterative };
