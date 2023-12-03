/**
 * @description Given a string containing characters (a-z), implement a function runLengthEncode that
 * compresses repeated ‘runs’ of the same character by storing the length of that run, The output
 * can be anything, as long as you can recreate the input with it.
 * For example:
 * runLengthEncode("aaaaaaaaaabbbaxxxxyyyzyx") # returns "a10b3a1x4y3z1y1x1"
 *
 * @param {string} word
 */
function runLengthEncode(word) {
  if (!word) return "";

  let encoded = "";
  let count = 1;

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      count++;
    } else {
      encoded += word[i - 1] + count;
      count = 1;
    }
  }
  //Ensures last set of characters are appended
  encoded += word[word.length - 1] + count;
  return encoded;
}

/**
 * Provide a function runLengthDecode to reverse the compression. The output can be
 * anything, as long as you can recreate the input with it.
 * For example:
 * runLengthDecode("a10b3a1x4y3z1y1x1") # returns "aaaaaaaaaabbbaxxxxyyyzyx"
 * @param {string} encodedWord
 */
function runLengthDecode(encodedWord) {
  const regex = /[a-z]\d+/g;
  const matches = encodedWord.match(regex);
  let decode = "";
  matches?.forEach((match) => {
    const char = match[0];
    const count = parseInt(match.slice(1));
    decode += char.repeat(count);
  });
  return decode;
}

module.exports = { runLengthEncode, runLengthDecode };
