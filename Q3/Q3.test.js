const { runLengthEncode, runLengthDecode } = require("./Q3");
describe("Problem 3 tests", () => {
  test("test encode -  `aaaaaaaaaabbbaxxxxyyyzyx` - returns `a10b3a1x4y3z1y1x1` ", () => {
    expect(runLengthEncode("aaaaaaaaaabbbaxxxxyyyzyx")).toBe(
      "a10b3a1x4y3z1y1x1"
    );
  });
  test("test decode -  `a10b3a1x4y3z1y1x1` - returns `aaaaaaaaaabbbaxxxxyyyzyx` ", () => {
    expect(runLengthDecode("a10b3a1x4y3z1y1x1")).toBe(
      "aaaaaaaaaabbbaxxxxyyyzyx"
    );
  });
  test("test encode - `bbbbbbbbbb` - returns `b10` ", () => {
    expect(runLengthEncode("bbbbbbbbbb")).toBe("b10");
  });
  test("test decode - `b10` - returns `bbbbbbbbbb` ", () => {
    expect(runLengthDecode("b10")).toBe("bbbbbbbbbb");
  });
  test("test encode - empty string", () => {
    expect(runLengthEncode("")).toBe("");
  });
  test("test decode - empty string", () => {
    expect(runLengthDecode("")).toBe("");
  });
  test("test encode - `b` - returns `b1` ", () => {
    expect(runLengthEncode("b")).toBe("b1");
  });
  test("test decode - `b1` - returns `b` ", () => {
    expect(runLengthDecode("b1")).toBe("b");
  });
});
