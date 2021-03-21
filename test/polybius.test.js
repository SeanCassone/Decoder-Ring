const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
  describe("When encoding", () => {
    it("Your output should still be a string", () => {
      const expected = "4432423352125413";
      const actual = polybius("thinkful");
      expect(actual).to.be.equal(expected);
    });
    it("Capital letters should be ignored", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("Hello world");
      expect(actual).to.be.equal(expected);
    });
    it("Spaces should be maintained throughout.", () => {
      const expected = "52515153 443251 3453113151";
      const actual = polybius("keep the space");
      expect(actual).to.be.equal(expected);
    });
    it("The letters 'I' and 'J' share a space. When encoding both letters can be converted to 42", () => {
      const expected = "3444241142223244421131525144";
      const actual = polybius("straightjacket");
      expect(actual).to.be.equal(expected);
    });
  });
  describe("When decoding", () => {
    const decode = false; //-> Decode is equal to false
    it("Spaces should be maintained throughout", () => {
      const expected = "keep the space";
      const actual = polybius("52515153 443251 3453113151", decode);
      expect(actual).to.be.equal(expected);
    });
    it('The letters "I" and "J" share a space. When decoding, both letters should somehow be shown', () => {
      const expected = "strai/jghti/jacket";
      const actual = polybius("3444241142223244421131525144", decode);
      expect(actual).to.be.equal(expected);
    });
    it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", () => {
      const expected = false;
      const actual = polybius("3343445115513", decode); //-> 13 characters
      expect(actual).to.be.equal(expected);
    });
  });
});
