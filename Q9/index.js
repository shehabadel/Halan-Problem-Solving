const { sum } = require("./Q9");
const Node = require("./Node");
console.log(
  sum(
    new Node(1, [
      new Node(2, [new Node(2, [])]),
      new Node(2, [new Node(0, [])]),
    ])
  )
);
