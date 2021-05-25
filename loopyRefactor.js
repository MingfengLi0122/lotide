function loopyLighthouse(range, multiples, words) {
  var start = range[0];
  var end = range[1];
  while (start <= end) {
    var temp = start;
    if(temp % multiples[0] === 0 && temp % multiples[1] !== 0) {
      console.log(words[0]);
    } else if (temp % multiples[1] === 0 && temp % multiples[0] !== 0) {
      console.log(words[1]);
    } else if (start % multiples[0] === 0 && temp % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else {
      console.log(start);
    }
    start++;
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

