const compose = require("./Q4").compose;
describe("Problem 4 tests", () => {
  test("test compose - inc and square", () => {
    function inc(number) {
      return number + 1;
    }
    function square(number) {
      return number * number;
    }
    let h = compose(square, inc);

    expect(h(6)).toBe(49);
  });
  test("test compose - inc and inc", () => {
    function inc(number) {
      return number + 1;
    }
    let h = compose(inc, inc);

    expect(h(6)).toBe(8);
  });
  test("test compose - square and square", () => {
    function square(number) {
      return number * number;
    }
    let h = compose(square, square);

    expect(h(6)).toBe(1296);
  });
});
