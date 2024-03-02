const palindromes = function (line) {
  let formattedline = line.toLowerCase().replace(/[^0-9a-z]/g, "");

  return formattedline == formattedline.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
