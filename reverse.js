const args = process.argv.slice(2);
let rev = function (args) {
  let reversed = "";
  for (let i = 0; i < args.length; i++) {
    let temp = args[i];
    for (let j = temp.length - 1 ; j >= 0; j--) {
      reversed += temp[j];
    }
    if (i !== args.length - 1)
      reversed += "\n";
  }
  return reversed;
};
console.log(rev(args));