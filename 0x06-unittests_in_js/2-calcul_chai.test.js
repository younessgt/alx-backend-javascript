const { expect } = require("chai");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  it("test SUM", () => {
    expect(calculateNumber("SUM", 1, 3)).to.equal(4);
    expect(calculateNumber("SUM", 10, 3)).to.equal(13);
    expect(calculateNumber("SUM", 0, 5)).to.equal(5);
    expect(calculateNumber("SUM", 1, -3)).to.equal(-2);
  });

  it("test SUBTRACT", () => {
    expect(calculateNumber("SUBTRACT", 1, 3)).to.equal(-2);
    expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber("SUBTRACT", 10, 8)).to.equal(2);
  });

  it("test DIVIDE", () => {
    expect(calculateNumber("DIVIDE", 10, 2)).to.equal(5);
    expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber("DIVIDE", 10, 2.2)).to.equal(5);
    expect(calculateNumber("DIVIDE", 1.2, 0)).to.equal("Error");
  });

  it("test not a number", () => {
    expect(() => calculateNumber("test", 12)).to.throw(
      TypeError,
      "Arg must be numbers"
    );
    expect(() => calculateNumber(12, "test")).to.throw(
      TypeError,
      "Arg must be numbers"
    );
  });
  it("test type not a string", () => {
    expect(() => calculateNumber(0, 10, 12)).to.throw(
      TypeError,
      "type must be string"
    );
  });
});
