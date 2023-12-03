const transpose = require("./Q6").transpose;
describe("Problem 6 tests", () => {
  test("Should transpose a 2x2 matrix correctly", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const transposedMatrix = transpose(matrix);
    expect(transposedMatrix).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });

  test("Should transpose a 2x4 matrix correctly", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];
    const transposedMatrix = transpose(matrix);
    expect(transposedMatrix).toEqual([
      [1, 5],
      [2, 6],
      [3, 7],
      [4, 8],
    ]);
  });

  test("Should transpose a 3x3 matrix correctly", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const transposedMatrix = transpose(matrix);
    expect(transposedMatrix).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });

  test("Should return an empty matrix for an empty input", () => {
    const matrix = [];
    const transposedMatrix = transpose(matrix);
    expect(transposedMatrix).toEqual([]);
  });

  test("Should transpose a 1x4 matrix correctly", () => {
    const matrix = [[1, 2, 3, 4]];
    const transposedMatrix = transpose(matrix);
    expect(transposedMatrix).toEqual([[1], [2], [3], [4]]);
  });

  test("Should transpose a 4x1 matrix correctly", () => {
    const matrix = [[1], [2], [3], [4]];
    const transposedMatrix = transpose(matrix);
    expect(transposedMatrix).toEqual([[1, 2, 3, 4]]);
  });
});
