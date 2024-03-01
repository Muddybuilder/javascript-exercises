const repeatString = function (input, repeat) {
  if (repeat < 0) {
    return "ERROR";
  }

  let result = "";

  for (let num = 0; num < repeat; num++) {
    result += input;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
