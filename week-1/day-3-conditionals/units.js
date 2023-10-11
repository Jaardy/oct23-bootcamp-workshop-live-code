const prefixLookup = {
  1: "km",
  2: "Mm",
  3: "Gm",
  4: "Tm",
  5: "Pm",
  6: "Em",
  7: "Zm",
  8: "Ym",
  9: "Rm",
  10: "Qm",
};

function meters(x) {
  if (x < 1000) return `${x}m`;
  const [valueString, decimalPlacesString] = x.toExponential().split("e+");
  const decimalPlaces = Number.parseFloat(decimalPlacesString);
  const value = Number.parseFloat(valueString);
  return `${(value * 10 ** (decimalPlaces % 3)).toFixed(3) / 1}${
    prefixLookup[Math.floor(decimalPlaces / 3)]
  }`;
}
//1000
console.log(meters(1_120_000));
