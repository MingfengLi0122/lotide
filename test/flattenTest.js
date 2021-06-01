const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it ("returns [1, 2, 3, 4, 5, 6] for input [1, 2, [3, 4], 5, [6]]", () => {
    assert.strictEqual((flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
  });
});