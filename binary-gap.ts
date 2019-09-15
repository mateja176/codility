import { deepStrictEqual } from 'assert';

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N: number) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2);

  // const gaps = binary.match(/(?<=1)0+(?=1)/g) || [];
  // const gaps = (binary.matchAll(/1(0+)1/g) || []).map(([, gap]) => gap);
  // const matches = /10+1/g.exec(binary) || [];
  const matches = binary.match(/10+(?=1)/g) || [];
  const gaps = matches.map(match => match.replace(/1/g, ''));

  return gaps.reduce(
    (longest, current) => (current.length > longest ? current.length : longest),
    0,
  );
}

deepStrictEqual(solution(5), 1);
deepStrictEqual(solution(20), 1);
deepStrictEqual(solution(32), 0);
deepStrictEqual(solution(1162), 3);
deepStrictEqual(solution(74901729), 4);
deepStrictEqual(solution(328), 2);
