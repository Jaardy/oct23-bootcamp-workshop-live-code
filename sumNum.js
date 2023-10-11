function sumNum(n) {
  if (n === 1) return 1;
  return n + sumNum(n - 1);
}

console.log(sumNum(10));
