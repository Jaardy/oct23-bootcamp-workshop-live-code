function bacteriaTime(currentNum, targetNum) {
  if (currentNum > targetNum) {
    return "targetNum must be larger than currentNum";
  }
  let genCount = 0;
  while (currentNum < targetNum) {
    genCount++;
    currentNum *= 2;
  }
  return genCount * 20;
}

console.assert(bacteriaTime(3, 6000) === 220, "Should return 220");
console.assert(bacteriaTime(1, 8) === 60, "Should return 60");
