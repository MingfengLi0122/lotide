const assert = require("chai").assert;
const tail = require("../tail");
const assertArraysEqual = require("../assertArraysEqual");


describe("#tail", () => {
  it ("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
})


