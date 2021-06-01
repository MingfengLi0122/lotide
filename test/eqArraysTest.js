const assert = require('chai').assert;
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const b = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false

describe ("#eqArrays", () => {
  it ("return false for inputs [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
});