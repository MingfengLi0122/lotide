const tail = require("../tail");
const assertEqual = require("../assertEqual");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(words);

const words1 = ["Yo Yo"];
console.log(tail(words1).length);

const words2 = [];
console.log(tail(words2).length);

let words3 = [1, 2, 3];
assertEqual(tail(words3).length, words3.length - 1);