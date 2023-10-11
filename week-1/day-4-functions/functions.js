const testString = [
  "excavate",
  "endure",
  "desire",
  "screen",
  "theater",
  "excess",
  "night",
];

const testString2 = ["no", "dog", "on", "good"];
const testString3 = ["engine", "endure", "elite", "excess"];
const testString4 = ["ab", "bc", "cd", "da"];
//excavate  endure desire

function solution(set) {
  const usedWords = new Set();

  function canConcatenate(currentWord) {
    if (usedWords.size === set.length) {
      // All words have been used.
      return true;
    }

    for (let i = 0; i < set.length; i++) {
      if (!usedWords.has(i) && currentWord.slice(-1) === set[i][0]) {
        usedWords.add(i);
        if (canConcatenate(set[i])) {
          return true;
        }
        usedWords.delete(i); // Backtrack if the concatenation fails
      }
    }

    return false;
  }

  for (let i = 0; i < set.length; i++) {
    usedWords.add(i);
    if (canConcatenate(set[i])) {
      return true;
    }
    usedWords.delete(i); // Backtrack if the concatenation fails
  }

  return false;
}

let x = ["nine", "ee", "ee", "ee", "eleven"];

console.table(solution(x));

// console.table(solution(testString2));

// console.table(solution(testString3));

// console.table(solution(testString4));
