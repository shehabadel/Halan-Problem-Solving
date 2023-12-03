/**
 * @description Problem 05
 * Write a function unique that takes an array of strings as input and returns an array of
 * the unique entries in the input, for example:
 * unique(['apples', 'oranges', 'flowers', 'apples']) # returns ['oranges', 'flowers']
 * x ↦ f(g(x))
 * unique(['apples', 'apples']) # returns []
 * @param {string} word
 */
function unique(words) {
  const map = new Map();
  words?.forEach((word) => {
    if (map.has(word)) {
      let count = map.get(word);
      map.set(word, count + 1);
    } else {
      map.set(word, 1);
    }
  });

  const unique = [];
  for (const [key, val] of map.entries()) {
    if (val === 1) {
      unique.push(key);
    }
  }
  return unique;
}
module.exports = { unique };
