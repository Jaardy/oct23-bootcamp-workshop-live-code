//It is a common pattern to compare an element to the one next to it
//When using the for in loop, it compares the value at i with the previous i.
//you can see that we are having to add a bit of logic for the first loop
//because we can't compare the first value with the previous one.

//By using a different syntax we can start our loop on index 1
//let i=1 instead of let i=0

//another solution was to brek the loop one element early
//i < array.length-1
//in this solution we are comparing the current element with the next one

function firstNonConsecutive(arr) {
  for (index in arr) {
    if (index == 0) {
      continue;
    }
    if (arr[+index - 1] !== arr[index] - 1) {
      return null;
    }
  }
}

function firstNonConsecutive2(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

function firstNonConsecutive1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1] - 1) {
      return arr[i + 1];
    }
  }
  return null;
}

let x = firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(x);
// firstNonConsecutive([3, 4, 5, 6, 7, 10]);
// firstNonConsecutive([-1, 3, 4, 5, 6, 7, 10]);
// firstNonConsecutive([-4, -2, -1, 3, 4, 5]);
