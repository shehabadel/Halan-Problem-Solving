const unique = require("./Q5").unique;
describe("Problem 5 tests", () => {
  test("test two unqiues", () => {
    const words = ["apples", "oranges", "flowers", "apples"];
    expect(unique(words)).toEqual(["oranges", "flowers"]);
  });
  test("test no uniques", () => {
    const words = ["apples", "apples"];
    expect(unique(words)).toEqual([]);
  });
  test("test empty", () => {
    const words = [];
    expect(unique(words)).toEqual([]);
  });
});
