const add = function (operand1, operand2) {
  return operand1 + operand2;
};

const subtract = function (operand1, operand2) {
  return operand1 - operand2;
};

const sum = function (operandArray) {
  return operandArray.reduce((cur, total) => cur + total, 0);
};

const multiply = function (operandArray) {
  return operandArray.reduce((cur, total) => cur * total, 1);
};

const power = function (base, exp) {
  return Math.pow(base, exp);
};

const factorial = function (target) {
  if (target === 0) {
    return 1;
  }

  let base = 1;
  for (let num = 1; num <= target; num++) {
    base *= num;
  }
  return base;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
