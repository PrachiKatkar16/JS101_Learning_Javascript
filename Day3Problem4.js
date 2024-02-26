function findsum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function findAverage(arr) {
  if (arr.length == 0) {
    return 0;
  }
  var sum = findsum(arr);
  var average = sum / arr.length;
  return average;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = findsum(arr);
var average = findAverage(arr);
console.log("Sum : ", sum);
console.log("Average : ", average);
