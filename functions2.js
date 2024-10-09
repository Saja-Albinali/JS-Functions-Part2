function isOdd(n) {
  return n % 2 !== 0;
}
console.log(isOdd(7));
console.log(isOdd(10));
// task2
function oddsSmallerThan(n) {
  if (n <= 1) {
    return 0;
  }
  return Math.floor((n - 1) / 2);
}
console.log(oddsSmallerThan(7));
console.log(oddsSmallerThan(15));
// task3
function squareOrDouble(n) {
  if (n % 2 === 0) {
    return n * 2;
  } else {
    return n * n;
  }
}
console.log(squareOrDouble(16));
console.log(squareOrDouble(9));
