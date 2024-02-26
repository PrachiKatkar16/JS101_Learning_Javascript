function customJoin(arr, separator) {
  if (arr.length == 0) {
    return "";
  }
  var result = arr[0].toString();
  for (var i = 1; i < arr.length; i++) {
    result += separator + arr[i].toString();
  }
  return result;
}
var arr = ["hello", "world", "how", "are", "you"];
var separator = "*";
var result = customJoin(arr, separator);
console.log(result);
