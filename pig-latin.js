const args = process.argv.slice(2);
let pigLatin = function(args) {
  let res = "";
  for (let i = 0; i < args.length; i++) {
    let temp = args[i];
    for (let j = 1; j < temp.length; j++) {
      res += temp[j];
    }
    res += args[i][0] + "ay ";
  }
  return res;
};
console.log(pigLatin(args));