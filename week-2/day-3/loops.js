const myNums = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// a0 , a1, a2
// b0, b1, b2
// c0, c1, c2

// function sumEvens(myNums) {
//   let total = 0;
//   for (value of myNums) {
//     total += value;
//   }
//   return total;
// }

function twoDArray(arr) {
  //   for (let i = 0; i < myNums.length; i++) {
  //     for (let j = 0; j < myNums[i].length; j++) {
  //       console.log(typeof arr[i][j]);
  //     }
  //   }
  for (row of arr) {
    for (col of row) console.log(typeof col);
  }
}

twoDArray(myNums);

// console.log("total:", sumEvens(myNums));
