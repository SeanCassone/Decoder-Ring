// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  /**
   *
   * @param {String} input refers to the inputted text to be encoded or decoded.
   * @param {Number} shift shift refers to how much each letter is "shifted" by.
   * A positive number means shifting to the right (i.e. "A" becomes "D") whereas
   * a negative number means shifting to the left (i.e. "M" becomes "K").
   * @param {Boolean} encode encode refers to whether you should encode or decode the message. By default it is set to true.
   * @returns
   */
  function caesar(input, shift, encode = true) {
    //-> limits shift
    const shiftLimit = {
      start: "a".charCodeAt(),
      end: "z".charCodeAt(),
    };
    //-> If shift value is not present, = to 0, < -25, or > 25, return false
    if (!shift || shift < -25 || shift === 0 || shift > 25) return false;
    // -> if encode is false decode
    if (!encode) {
      shift *= -1;
    }
    return input
      .toLowerCase() //-> Convert the string to lowercase
      .split("") //-> split the string into letter
      .map((char) => {
        //-> Iterate over each character in the array for its character code
        const letterCode = char.charCodeAt(0); //-> Convert char to a character code
        //-> return anything that is not a letter
        if (letterCode < shiftLimit.start || letterCode > shiftLimit.end)
          return String.fromCharCode(letterCode);
        else {
          //-> Add the shift
          let shifted = letterCode + shift;
          //-> handles wrap incase the shift is out of range of the characters
          if (shifted > shiftLimit.end) {
            //-> if the shifted value goes past z loop back around to a
            shifted = shiftLimit.start + (shifted - shiftLimit.end - 1);
          } else if (shifted < shiftLimit.start) {
            //-> if the shifted value goes past a loop back around to z
            shifted = shiftLimit.end - (shiftLimit.start - shifted - 1);
          }
          return String.fromCharCode(shifted);
        }
      })
      .join(""); //-> Join letters back to string
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
