const { expect } = require("chai");
const caesar = require("../src/caesar");

describe("caesar", () => {
  describe("When encoding", () => {
    it("should return false if the shift is not present", () => {
      const expected = false;
      const actual = caesar("decoding");
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift is set 0", () => {
      const expected = false;
      const actual = caesar("decoding", 0);
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift is less than -25", () => {
      const expected = false;
      const actual = caesar("decoding", -26);
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift is greater than 25", () => {
      const expected = false;
      const actual = caesar("decoding", 99);
      expect(actual).to.equal(expected);
    });
    it("Spaces should be maintained throughout, as should other non-alphabetic symbols.", () => {
      const expected = "ftue ue sauzs fa ymwq yq $$!";
      const actual = caesar("This is going to make me $$!", 12);
      expect(actual).to.equal(expected);
    });
    it('If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").', () => {
      const expected = "txlcclfdo";
      const actual = caesar("quizzical", 3);
      expect(actual).to.equal(expected);
    });
    it("Capital letters should be ignored", () => {
      const expected = "c ug mbioncha";
      const actual = caesar("I AM SHOUTING", 20);
      expect(actual).to.equal(expected);
    });
  });
  describe("When decoding", () => {
    decode = false; //-> Decode is equal to false
    it("should return false if the shift is not present", () => {
      const expected = false;
      const actual = caesar("jkiujotm");
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift is set 0", () => {
      const expected = false;
      const actual = caesar("jkiujotm", 0);
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift is less than -25", () => {
      const expected = false;
      const actual = caesar("jkiujotm", -26);
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift is greater than 25", () => {
      const expected = false;
      const actual = caesar("jkiujotm", 99);
      expect(actual).to.equal(expected);
    });
    it("Spaces should be maintained throughout, as should other non-alphabetic symbols.", () => {
      const expected = "this is going to make me $$!";
      const actual = caesar("ftue ue sauzs fa ymwq yq $$!", 12, decode);
      expect(actual).to.equal(expected);
    });
    it('If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").', () => {
      const expected = "quizzical";
      const actual = caesar("txlcclfdo", 3, false);
      expect(actual).to.equal(expected);
    });
    it("Capital letters should be ignored", () => {
      const expected = "i am shouting";
      const actual = caesar("C UG MBIONCHA", 20, decode);
      expect(actual).to.equal(expected);
    });
  });
});
