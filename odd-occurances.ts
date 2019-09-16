function solution(A: number[]) {
  return A.reduce(
    (a, n) => {
      return a.includes(n) ? a.filter(m => m !== n) : a.concat(n);
    },
    [] as number[],
  )[0];
}

// function solution(A: number[]) {
//   return A.find(n => {
//     const B = A.filter(m => m !== n);

//     return A.length - B.length === 1;
//   });
// }

function solution(A: number[]) {
  let B = A;

  return A.find(n => {
    const b = B.filter(m => m !== n);

    if (B.length - b.length === 1) {
      return true;
    } else {
      B = b;

      return false;
    }
  });
}
