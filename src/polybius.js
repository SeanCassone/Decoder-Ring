// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (() => {
  const decodeObj = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "i/j",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };
  const encodeObj = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  /**
   *
   *
   * @param {String} input refers to the inputted text to be encoded or decoded.
   * @param {Boolean} encode encode refers to whether you should encode or decode the message. By default it is set to true.
   * @returns {String} an encoded or decoded message using Polybius Square Cipher
   * You are welcome to assume that no additional symbols will be included as part of the input.
   * Only spaces and letters will be included.
   * When encoding, your output should still be a string.
   * When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
   * Spaces should be maintained throughout.
   * Capital letters can be ignored.
   * The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
   */
  function polybius(input, encode = true) {
    input = input.toLowerCase(); //-> converts all characters in the input string to lower case
    //-> splits the input string into individual characters maps the characters vale to the key of the encodeObj and joins and returns the decoded message
    if (encode) {
      return input
        .split("")
        .map((value) => encodeObj[value] || " ")
        .join("");
    } else {
      words = input.split(" "); //-> splits the input string to individual characters for decode
      const isEven = words.every((word) => word.length % 2 === 0); //-> Checks each word to make sure it has an even number of characters for decoding
      if (!isEven) return false; //-> If its odd return false
      words = words
        //-> Mapping splitting and reducing the string of words represented by numbers down to two numbers for each letter and keeping blank spaces for decoding
        .map((word) => {
          return word.split("").reduce((accum, char, index, collection) => {
            //-> pushes whitespace into the accumulator array
            if (char === " ") {
              accum.push(" ");
            } else if (!(index % 2)) {
              accum.push(char + collection[index + 1]);
            }
            return accum;
          }, []);
        })
        .reduce((a, b) => a.concat(" ", b)); //-> reduce again and concatenate to include empty spaces
      return words.map((charCode) => decodeObj[charCode] || " ").join(""); //-> Map the charCode numbers to the keys of the decode Obj and join
    }
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
