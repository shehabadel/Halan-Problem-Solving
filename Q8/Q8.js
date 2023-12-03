/**
 * @description Problem 08
 * Given an integer array of length n, find the index of the first duplicate element in the
 * array and state the runtime and space complexity of your implementation, for example:
 * # returns 3, assuming the index starts with 0
 * index_of_first_duplicate( [ 5, 17, 3, 17, 4, -1 ] )
 * @summary Time Complexity: O(N), Space Complexity: O(N)
 * @param {number[]} numbers
 */
function index_of_first_duplicate(numbers) {
  const uniqueSet = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (uniqueSet.has(numbers[i])) {
      return i;
    }
    uniqueSet.add(numbers[i]);
  }

  return -1;
}

module.exports = { index_of_first_duplicate };
