const { Node, sum } = require("./Q9");

console.log(
  sum(
    new Node(1, [
      new Node(2, [new Node(2, [])]),
      new Node(2, [new Node(0, [])]),
    ])
  )
);
