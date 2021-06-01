const titleCase  = function(text) {
  let temp = text.split(" ");
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].substr(1).toLowerCase();
  }
  return temp.toString().replace(/,/g, " ");
};

module.exports = titleCase;