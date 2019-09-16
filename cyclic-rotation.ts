const rotate = (a: number[]) => a.slice(-1).concat(a.slice(0, -1));

function solution(A: number[], K: number) {
  const k = K % A.length;
  return Array(k)
    .fill(null)
    .map((_, i) => i)
    .reduce(rotate, A);
}
