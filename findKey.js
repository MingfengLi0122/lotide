const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😃😃😃Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("😡😡😡Assertion Failed: " + actual + " !== " + expected);
  }
};

const findKey = function(data, callback) {
  for (let item in data) {
    //console.log("item in data:", item);
    //console.log("prop of data:", data[item]);
    if (callback(data[item])) {
      //console.log(item);
      return item;
    }
  }
}

const actual = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const expect = "noma";
assertEqual(actual, expect);