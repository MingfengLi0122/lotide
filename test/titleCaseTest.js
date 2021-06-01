const titleCase = require("../titleCase");
const assert = require("chai").assert;

describe("#titileCase", () => {
  it ("returns capitalized string 'This Is An Example' for input 'this is an example'", () => {
    assert.strictEqual((titleCase('this is an example')), 'This Is An Example');
  });
  
  it ("returns capitalized string 'Test' for input 'test'", () => {
    assert.strictEqual((titleCase('test')), "Test");
  })

  it ("returns capitalized string 'I R Cool' for input 'i r cool'", () => {
    assert.strictEqual((titleCase('i r cool')), 'I R Cool');
  })

  it ("returns capitalized string 'What Happens Here' for input 'WHAT HAPPENS HERE'", () => {
    assert.strictEqual((titleCase('WHAT HAPPENS HERE')), 'What Happens Here');
  })

  it ("returns capitalized string '' for input ''", () => {
    assert.strictEqual((titleCase('')), '');
  })

  it ("returns capitalized string 'A' for input 'A'", () => {
    assert.strictEqual((titleCase('A')), 'A');
  })
})