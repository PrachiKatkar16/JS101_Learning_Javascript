function customLastIndexOf(arr, element) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == element) {
      return i;
    }
  }
  return -1;
}

var arr = ["hello", "world", "how", "are", "you"];
var element = "are";
var result = customLastIndexOf(arr, element);
console.log(result);
