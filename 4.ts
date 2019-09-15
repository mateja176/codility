// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S: string) {
  // write your code in JavaScript (Node.js 8.9.4)

  const count = S.replace(/^W*/, '')
    .replace(/W*$/, '')
    .split('')
    .filter(s => s === 'W').length;

  return count > 10 ** 4 ? -1 : count;
}
