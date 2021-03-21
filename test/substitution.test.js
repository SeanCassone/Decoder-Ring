const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
  describe("When Encoding", () => {
    it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
      const expected = "y&ii$r&";
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal(expected);
    });
    it("Spaces should be maintained throughout and capital letters ignored.", () => {
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution(
        "You are an excellent spy",
        "xoyqmcgrukswaflnthdjpzibev"
      );
      expect(actual).to.equal(expected);
    });
    it("All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
      const expected = false;
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
      expect(actual).to.equal(expected);
    });
    it("The alphabet parameter must be a string of exactly 26 characters, Otherwise, it should return false", () => {
      const expected = false;
      const actual = substitution("thinkful", "short");
      expect(actual).to.equal(expected);
    });
    it("The alphabet parameter could include special characters such as #, $, *, etc.", () => {
      const expected = "y&ii$r&";
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal(expected);
    });
  });
  describe("When Decoding", () => {
    decode = false; //-> Decode is equal to false
    it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
      const expected = "message";
      const actual = substitution(
        "y&ii$r&",
        "$wae&zrdxtfcygvuhbijnokmpl",
        decode
      );
      expect(actual).to.equal(expected);
    });
    it("Spaces should be maintained throughout and capital letters ignored.", () => {
      const expected = "you are an excellent spy";
      const actual = substitution(
        "elp xhm xf mbymwwmfj dne",
        "xoyqmcgrukswaflnthdjpzibev",
        decode
      );
      expect(actual).to.equal(expected);
    });
    it("All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
      const expected = false;
      const actual = substitution("jrufscpw", "abcabcabcabcabcabcabcabcyz");
      expect(actual).to.equal(expected);
    });
    it("The alphabet parameter must be a string of exactly 26 characters, Otherwise, it should return false", () => {
      const expected = false;
      const actual = substitution("jrufscpw", "short");
      expect(actual).to.equal(expected);
    });
    it("The alphabet parameter could include special characters such as #, $, *, etc.", () => {
      const expected = "y&ii$r&";
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal(expected);
    });
  });
});
