// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const getSumOfDigits = (n: number) =>
  n
    .toString()
    .split('')
    .map(d => parseInt(d, 10))
    .reduce((sum, d) => sum + d, 0);

function solution(A: number[]) {
  // write your code in JavaScript (Node.js 8.9.4)

  const sumsOfDigits = A.map(getSumOfDigits);

  return A.reduce((largest, n, index) => {
    const sumOfDigits = sumsOfDigits[index];

    return A.filter((_, i) => i !== index)
      .filter(m => getSumOfDigits(m) === sumOfDigits)
      .reduce((l, m) => {
        const sum = m + n;
        return sum > l ? sum : l;
      }, largest);
  }, -1);
}
