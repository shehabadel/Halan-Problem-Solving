const palindrome = require("./Q1").palindrome;
describe("Problem 1 tests", () => {
  test("test word `racecar` - returns true", () => {
    expect(palindrome("racecar")).toBe(true);
  });
  test("test word `level` - returns true", () => {
    expect(palindrome("level")).toBe(true);
  });
  test("test word `nitin` - returns true", () => {
    expect(palindrome("nitin")).toBe(true);
  });
  test("test word `anna` - returns true", () => {
    expect(palindrome("anna")).toBe(true);
  });
  test("test word `banana` - returns false", () => {
    expect(palindrome("banana")).toBe(false);
  });
  test("test word `Rama` - returns false", () => {
    expect(palindrome("Rama")).toBe(false);
  });
  test("test word `lolol` - returns true", () => {
    expect(palindrome("lolol")).toBe(true);
  });
  test("test word `Lolol` - returns false", () => {
    expect(palindrome("Lolol")).toBe(false);
  });
});
