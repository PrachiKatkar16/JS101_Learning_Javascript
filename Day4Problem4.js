function customSubString(str, start, end) {
  if (start < 0) {
    start = str.length + start;
  }
  if (end < 0) {
    end = str.length + end;
  }
  var result = "";
  for (var i = start; i < end; i++) {
    result += str[i];
  }
  return result;
}
var str = "Hello World";
var start = 1;
var end = 4;
var result = customSubString(str, start, end);
console.log(result);
