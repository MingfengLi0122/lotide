const assert = require("chai").assert;
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

describe("#middle", () => {
  it ("return [2] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]), true);
  })
})
