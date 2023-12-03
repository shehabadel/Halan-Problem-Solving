const compose = require("./Q4").compose;
function inc(number) {
  return number + 1;
}
function square(number) {
  return number * number;
}
let h = compose(square, inc);
console.log(h(6));
