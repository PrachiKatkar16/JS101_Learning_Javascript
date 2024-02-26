function customSlice(arr, start, end) {
  var result = [];
  if (start < 0) {
    start = arr.length + start;
  }
  if (end < 0) {
    end = arr.length + end;
  }
  for (var i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}
var arr = ["hello", "world", "how", "are", "you"];
var start = 1;
var end = 3;
var result = customSlice(arr, start, end);
console.log(result);
