const myArray = ["dog", "cat", "fish", "rabbit", "chicken"];
const fourLegged = ["dog", "cat", "rabbit"];
const sum = myArray.reduce((acc, animal) => {
  if (fourLegged.includes(animal)) {
    acc.push(animal);
  }
  return acc;
}, []);

console.log(sum);
