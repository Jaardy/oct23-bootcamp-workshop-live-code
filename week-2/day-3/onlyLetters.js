let strOnly = [];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function onlyLetters(str) {
  for (let i = 0; i < str.length; i++) {
    if (numbers.includes(str[i])) {
      continue;
    } else {
      strOnly.push(str[i]);
    }
  }
  return strOnly.join("");
}

// console.log(onlyLetters("1aasf123ql'"));

console.log(isNaN(NaN));
module.exports = onlyLetters;
