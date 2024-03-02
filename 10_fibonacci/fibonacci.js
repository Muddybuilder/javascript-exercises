const fibonacci = function (n) {
  n = parseInt(n);
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n < 2) return 1;

  let first = 1;
  let second = 1;
  for (let index = 2; index < n; index++) {
    let temp = first;
    first += second;
    second = temp;
  }

  //   let dp = new Array(n).fill(0);
  //   dp[0] = dp[1] = 1;
  //   for (let index = 2; index < dp.length; index++) {
  //     dp[index] = dp[index - 2] + dp[index - 1];
  //   }

  return first;
};

// Do not edit below this line
module.exports = fibonacci;
// fibonacci(4);
