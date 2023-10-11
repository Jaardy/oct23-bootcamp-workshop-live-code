const solution = (words) => {
  const testStrings = [];
  for (w1 of words) {
    let testString = w1;
    for (w2 of words) {
      testString += w2;
    }
    testStrings.push(testString);
  }
  return testStrings;
};

let x = solution([
  "excavate",
  "endure",
  "desire",
  "screen",
  "theater",
  "excess",
  "night",
]);

console.log(x);

//de, ee, ee, es, sn,nt, tr
