const myArray = [["one"], ["two"], ["three"]];

function myModal({ h, w }) {
  if (!w) w = 10;
  if (!h) h = 10;
  return `My window is ${w} wide and ${h} tall`;
}

console.log(myModal({ w: 20 }));
//  sign up new user  takes myObj

// const { username, password } = myObj;

// console.log(username, password);

// console.log(first, second, third);
