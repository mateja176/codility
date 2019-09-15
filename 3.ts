// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S: string) {
  // write your code in JavaScript (Node.js 8.9.4)

  const matches = S.match(/([a]{3,}|[b]{3,})/g) || [];

  return matches.reduce(
    (moves, match) => moves + Math.floor(match.length / 3),
    0,
  );
}
