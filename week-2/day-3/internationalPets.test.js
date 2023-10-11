const internationalPets = require("./index.js");

it("is a function", () => {
  expect(typeof internationalPets).toEqual("function");
});

it("returns a string", () => {
  let returnedValue = internationalPets("cat", "Korea");
  expect(typeof returnedValue).toEqual("string");
});

it("returns the correct dog sound", () => {
  let returnedValue = internationalPets("dog", "Korea");
  expect(returnedValue).toEqual("Dogs in Korea say Mong mong!");
});

it("returns the correct cat sound", () => {
  let returnedValue = internationalPets("cat", "Algeria");
  expect(returnedValue).toEqual("Cats in Algeria say Miaou!");
});

it("returns the correct chicken sound", () => {
  let returnedValue = internationalPets("chicken", "Uruguay");
  expect(returnedValue).toEqual("Chickens in Uruguay say gut gut gdak");
});
