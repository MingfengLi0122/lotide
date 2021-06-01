const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe ("#eqObjects", () => {
  it ("return true for inputs { a: { z: 1 }, b: 2 } , { a: { z: 1 }, b: 2 })", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
});