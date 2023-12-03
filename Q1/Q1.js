/**
 * @description
 * Problem 01
 * A palindrome is a word or sequence of characters which reads the same backward or
 * forward. For example the words: level, anna, noon, rotator are all palindromes.
 * Write a function palindrom that accepts a string as an argument and returns a boolean
 * indicating whether the input is a palindrome or not, for example:
 * palindrome("anna") # returns True
 * palindrome("apple") # returns False
 * @param {string} word
 */
function palindrome(word) {
  var len = word.length;
  var mid = Math.floor(len / 2);
  for (var i = 0; i < mid; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = { palindrome };
