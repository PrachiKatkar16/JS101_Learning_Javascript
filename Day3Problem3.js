function isOdd(num) {
  if (num % 2 == 1) {
    return true;
  } else {
    return false;
  }
}
function printODD(limit) {
  for (var i = 0; i <= limit; i++) {
    if (isOdd(i)) {
      console.log(i);
    }
  }
}
printODD(10);
