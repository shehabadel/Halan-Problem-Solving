class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}
/**
   * @description Problem 09
   * Given the below tree structure, write a function sum that accepts a node and returns the
   * sum of integers for the whole tree represented by the given node argument
   * 
   * struct Node {
   * value: Integer,
   * children: [Node] # array of nodes
   * }
  
   * @param {Node} root 
   * @returns {number} result
   */
function sum(root) {
  if (root === null) {
    return 0;
  }
  let result = 0;
  let queue = [root];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    result += currentNode.value;
    if (currentNode.children && currentNode.children.length > 0) {
      queue.push(...currentNode.children);
    }
  }
  return result;
}

module.exports = { Node, sum };
