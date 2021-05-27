const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(res => Math.sqrt(Math.pow(res["x"], 2) + Math.pow(res["y"], 2)));

console.log("result[0] :", result[0]);
console.log(result[0] === 5);
console.log("result[1] :", result[1]);
console.log(result[1] === 13);
console.log("result[2] :", result[2]);
console.log(result[2] === 17);