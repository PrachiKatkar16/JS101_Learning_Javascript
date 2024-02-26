function toLowerCaseChar(char) {
  return char.toLowerCase();
}
function toLowerCaseWord(word) {
  return word.split("").map(toLowerCaseChar).join("");
}
function toLowerCaseArray(arr) {
  return arr.map(toLowerCaseWord);
}
var inputArray = ["MA", "SA", "I", "SCH", "OOL"];
var outputArray = toLowerCaseArray(inputArray);
console.log(inputArray);
console.log(outputArray);
