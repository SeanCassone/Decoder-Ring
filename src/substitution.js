// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  /**
   * @param {string} input input refers to the inputted text to be encoded or decoded.
   * @param {string} alphabet alphabet refers to substitution alphabet.
   * @param {boolean} encode encode refers to whether you should encode or decode the message. By default it is set to true.
   * The input could include spaces and letters as well as special characters such as #, $, *, etc.
   * Spaces should be maintained throughout.
   * Capital letters can be ignored.
   * The alphabet parameter must be a string of exactly 26 characters,
   * which could include special characters such as #, $, *, etc. Otherwise, it should return false.
   * All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.
   */
  function substitution(input, alphabet, encode = true) {
    const actualAlphabet = "abcdefghijklmnopqrstuvwxyz";
    //-> converts all characters in the input string to lower case and splits string into array of characters
    input = input.toLowerCase().split("");
    //-> tests to see if characters repeat
    const doesRepeat = /(.).*\1/.test(alphabet);
    //-> returns false if any characters do repeat or if the inputted alphabet is not exactly 26 characters
    if (doesRepeat || alphabet.length !== 26) return false;

    if (encode) {
      //-> Creates a new Object from the alphabet parameter
      //-> With the actual alphabet as keys and the fake alphabet as values
      const fakeAlphabet = actualAlphabet
        .split("")
        .reduce((accum, actualLetter, curIndex) => {
          return {
            ...accum,
            [actualAlphabet[curIndex]]: alphabet[curIndex],
          };
        }, {});
      fakeAlphabet[" "] = " "; //-> deals with whitespace
      return input
        .filter((letter) => fakeAlphabet.hasOwnProperty(letter)) //-> will find letters and filter out any odd characters
        .map((value) => fakeAlphabet[value]) //-> map the characters to the keys of the fakeAlphabet Object
        .join(""); //-> Join everything back together
    }
    if (!encode) {
      //-> Creates a new Object from the alphabet parameter
      //-> With the fake alphabet as keys and the actual alphabet as values
      const fakeAlphabetReversed = actualAlphabet
        .split("")
        .reduce((accum, actualLetter, curIndex) => {
          return {
            ...accum,
            [alphabet[curIndex]]: actualAlphabet[curIndex],
          };
        }, {});

      fakeAlphabetReversed[" "] = " "; //-> deals with whitespace
      return input
        .filter((letter) => fakeAlphabetReversed.hasOwnProperty(letter)) // will find letters and filter out any odd characters or whitespace
        .map((value) => fakeAlphabetReversed[value]) // map the characters to the keys of the fakeAlphabetReversed Object
        .join(""); //-> Join everything back together
    }
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
