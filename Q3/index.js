const runLengthEncode = require("./Q3").runLengthEncode;
const runLengthDecode = require("./Q3").runLengthDecode;

console.log(runLengthEncode("aaaaaaaaaabbbaxxxxyyyzyx"));
console.log(runLengthDecode("a10b3a1x4y3z1y1x1"));
