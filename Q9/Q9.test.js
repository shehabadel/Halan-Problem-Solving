const { sum } = require("./Q9");
const Node = require("./Node");
describe("Problem 9 - tests", () => {
  test("Should return 7", () => {
    expect(
      sum(
        new Node(1, [
          new Node(2, [new Node(2, [])]),
          new Node(2, [new Node(0, [])]),
        ])
      )
    ).toBe(7);
  });
  test("empty nodes", () => {
    expect(sum(null)).toBe(0);
  });
  test("test one node", () => {
    expect(sum(new Node(1, []))).toBe(1);
  });
  test("test several nodes, all zeros", () => {
    expect(
      sum(
        new Node(0, [
          new Node(0, [new Node(0, [])]),
          new Node(0, [new Node(0, [])]),
        ])
      )
    ).toBe(0);
  });
});
