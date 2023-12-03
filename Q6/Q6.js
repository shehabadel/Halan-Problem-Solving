/**
 * @description Problem 06
 * In linear algebra, the transpose of a matrix is another matrix created by writing the
 * rows of as the columns of , for example:
 * Write a function transpose that transposes a matrix, for example:
 * transpose( [ [1,2], [3,4] ] ) # returns [ [1,3], [2,4] ]
 * transpose( [ [1,2,3,4], [5,6,7,8] ] ) # returns [ [1,5], [2,6], [3,7], [4,8] ]
 * @param {*} matrix
 */
function transpose(matrix) {
  const rows = matrix?.length;
  const cols = matrix[0]?.length;

  const transposed = [];

  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i].push(matrix[j][i]);
    }
  }

  return transposed;
}

module.exports = { transpose };
