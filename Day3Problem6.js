function isUpper(char) {
  return char === char.toUpperCase();
}
function swapCasechar(char) {
  return isUpper(char) ? char.toLowerCase() : char.toUpperCase();
}
function swapCaseString(inputString) {
  return inputString.split("").map(swapCasechar).join("");
}
var inputString = "Test";
var outputString = swapCaseString(inputString);
console.log(inputString);
console.log(outputString);
