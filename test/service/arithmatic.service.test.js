const { expect } = require("chai");
const {
  addCalc,
  subtractCalc,
  multiplyCalc,
  divideCalc,
} = require("../../services/arithmatic.service");

describe("Arithmetic Operation", () => {
  describe("addCalc()", () => {
    it("should return 5 for addCalc(2, 3)", () => {
      expect(addCalc(2, 3)).to.equal(5);
    });

    it("should return NaN for missing second parameter", () => {
      const result = addCalc(2);
      expect(result).to.be.NaN;
    });

    it("should return NaN for non-numeric string input", () => {
      const result = addCalc(2, "string");
      expect(result).to.equal('2string');
    });
  });

  describe("subtractCalc()", () => {
    it("should return 4 for subtractCalc(7, 3)", () => {
      expect(subtractCalc(7, 3)).to.equal(4);
    });
  });

  describe("multiplyCalc()", () => {
    it("should return 12 for multiplyCalc(3, 4)", () => {
      expect(multiplyCalc(3, 4)).to.equal(12);
    });
  });

  describe("divideCalc()", () => {
    it("should return 2 for divideCalc(6, 3)", () => {
      expect(divideCalc(6, 3)).to.equal(2);
    });

    it("should throw error when dividing by 0", () => {
      expect(() => divideCalc(6, 0)).to.throw("Division by zero");
    });
  });
});
