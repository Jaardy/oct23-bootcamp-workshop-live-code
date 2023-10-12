const myArray = [2, 8, 10, 4, 6];

//is 8 bigger than 2? true
// is 10 bigger than 8?  true
// is 4 bigger than 10?  false

// myArray.map();

// myArray.forEach();

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i] * 2);
// }

// for in

// for (const i in myArray) {
//   console.log(myArray[i] * 2);
// }
// for of

// function sumArray(arr) {
//   let sum = 0;
//   for (const num of arr) {
//     sum += num;
//   }
//   return sum;
// }

function isAscending(arr) {
  // returns true or false
  let isBigger = true;
  for (let i = 1; i < myArray.length; i++) {
    console.log(myArray[i] * 2);
  }
  return isBigger;
}
// function isAscending(arr) {  // returns true or false
//   let isBigger = true
//   for (i in arr) {
//       if (i === arr.length -1) {
//         return isBigger
//       }
//       if (arr[i] > arr[i+1]) {
//         return isBigger = false
//       }
//   }
//   return isBigger
// }

console.log(sumArray(myArray));
