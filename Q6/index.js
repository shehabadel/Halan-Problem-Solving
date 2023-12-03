const transpose = require("./Q6").transpose;
const matrix1 = [
  [1, 2],
  [3, 4],
];
const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

console.log(transpose(matrix1));
console.log(transpose(matrix2));
console.log(transpose([]));
