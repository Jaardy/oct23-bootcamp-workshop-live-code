let x = "value";
let timeElapsed = 0;
function checkTrafficLight(lightColour) {
  if (
    lightColour !== "red" ||
    lightColour !== "yellow" ||
    lightColour !== "green"
  ) {
    return Error("That's not how traffic lights");
  }
  if (lightColour === "red") {
    timeElapsed += 2;
  } else if (lightColour === "green") {
    timeElapsed += 2 / 10;
  } else if (lightColour === "yellow") {
    timeElapsed += 1 / 10;
  }
}

checkTrafficLight("red");
checkTrafficLight("red");
checkTrafficLight("green");
checkTrafficLight("red");
checkTrafficLight("yellow");

console.log(timeElapsed);
