const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

describe ("#letterPositions", () => {
  it ("returns letterPositions of 'e' for input 'hello'", () => {
    assert.equal(assertArraysEqual(letterPositions("hello").e, [1]), true);
  });
});
