const index_of_first_duplicate = require("./Q8").index_of_first_duplicate;
describe("Problem 8 tests", () => {
  test("Should return 3", () => {
    expect(index_of_first_duplicate([5, 17, 3, 17, 4, -1])).toBe(3);
  });
  test("Empty array", () => {
    expect(index_of_first_duplicate([])).toBe(-1);
  });
  test("No duplicates", () => {
    expect(index_of_first_duplicate([5, 17, 3, 4, -1])).toBe(-1);
  });
});
