// Given positive integers n and m, find all integers less than n whose the square of the sum of
// thier digits is equal to m. If you haven't such integers return No result.
//
// m=5, n=4    -> [2]
// m=50, n=15  -> 'No result'
// m=156, n=16 -> [4,13,22,31,40,103,112,121,130]
// m=297, n=25 -> [5,14,23,32,41,50,104,113,122,131,140,203,212,221,230]

const intSumSq = (n, m) => {
  let arr = [],
    temp = '',
    price = 0;

  for (let i = 0; i < n; i++) {
    temp = i.toString().split('');
    if (temp.length > 1) {
      price = Math.pow(temp.reduce( (acum, el) => acum += +el, 0), 2);
    } else {
      price = i * i;
    }
    if (m === price) arr.push(i);
  }
  return arr.length !== 0 ? arr : 'No result';
}
