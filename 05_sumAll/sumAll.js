const sumAll = function (start, end) {
  if (start < 0 || end < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  sum = 0;
  for (let num = start; num <= end; num++) {
    sum += num;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
