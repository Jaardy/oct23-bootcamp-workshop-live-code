const rosterTable = {
  Monday: "James",
  Tuesday: "John",
  Wednesday: "Robert",
  Thursday: "Michael",
  Friday: "William",
};
const task = (w, n, c) =>
  `It is ${w} today, ${
    rosterTable[w]
  }, you have to work, you must spray ${n} trees and you need ${
    c * n
  } dollars to buy liquid`;

console.log(task("Wednesday", 10, 2));
