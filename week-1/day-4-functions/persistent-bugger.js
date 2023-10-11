// Write a function, persistence, that takes in a positive parameter
// num and returns its multiplicative persistence, which is the number of
// times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

/**
 *
 * @param {number} num
 */
function persistence(num) {
  if (num < 10) return 0;
  let product = num
    .toString()
    .split("")
    .reduce((acc, n) => (acc *= n));
  return persistence(product) + 1;
}

console.log(persistence(39));
