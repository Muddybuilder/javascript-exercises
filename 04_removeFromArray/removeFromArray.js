const removeFromArray = function (inputArr, ...args) {
  result = [];

  for (let index = 0; index < inputArr.length; index++) {
    const element = inputArr[index];
    if (!args.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
