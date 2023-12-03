/**
 * @description Problem 4
 * Let f and g be two one-argument functions. The composition f after g is defined to be the
 * function . Define a function compose that implements composition. For
 * example, if inc is a function that adds 1 to its argument, and square is a function that
 * squares its argument, then:
 * h = compose(square, inc) # create a new function h by composing inc and square
 * h(6) # returns 49
 * @param {Function} f
 * @param {Function} g
 */
function compose(f, g) {
  function composeInner(number) {
    return f(g(number));
  }
  return composeInner;
}

module.exports = { compose };
