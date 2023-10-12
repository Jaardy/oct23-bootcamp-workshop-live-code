function bacteriaTime(currentNum, targetNum, genCount = 0) {
  if (currentNum >= targetNum) {
    return genCount * 20;
  }
  genCount++;
  currentNum *= 2;
  return bacteriaTime(currentNum, targetNum, genCount);
}

//1 , 8, 0  => result from bacteriaTime(2,8,1) => bacteriaTime(4,8,2)  => bacteriaTime(8,8,3) = 60

//2, 8, 1
//4, 8, 2
//8, 8, 3

console.log(bacteriaTime(1, 8));

// function bacteriaTime(currentNum, targetNum) {
//     if (currentNum > targetNum) {
//       return "targetNum must be larger than currentNum";
//     }
//     let genCount = 0;
//     while (currentNum < targetNum) {
//       genCount++;
//       currentNum *= 2;
//     }
//     return genCount * 20;
//   }

// console.assert(bacteriaTime(3, 6000) === 220, "Should return 220");
// console.assert(bacteriaTime(1, 8) === 60, "Should return 60");
