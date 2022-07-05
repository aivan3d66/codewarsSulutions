// Input
// a string strng of n positive numbers (n = 0 or n >= 2)
// Let us call weight of a number the sum of its digits. For example 99 will have "weight" 18, 100 will have "weight" 1.
//
// Two numbers are "close" if the difference of their weights is small.
//
//   Task:
// For each number in strng calculate its "weight" and then find two numbers of strng that have:
//
//   the smallest difference of weights ie that are the closest
// with the smallest weights
// and with the smallest indices (or ranks, numbered from 0) in strng
// Output:
//   an array of two arrays, each subarray in the following format:
//   [number-weight, index in strng of the corresponding number, original corresponding number in strng]
//
// or a pair of two subarrays (Haskell, Clojure, FSharp) or an array of tuples (Elixir, C++)
//
// or a (char*) in C or a string in some other languages mimicking an array of two subarrays or a string
//
// or a matrix in R (2 rows, 3 columns, no columns names)
//
// The two subarrays are sorted in ascending order by their number weights if these weights are different, by their indexes in the string if they have the same weights.

function closest(strng) {
  if (strng === '') return [];
  let numW = strng.split(' ').map(function (el, index) {
    let nums = el.split(''),
      wg = 0;
    for (let i = 0; i < nums.length; i++) {
      wg += +nums[i];
    }
    return {
      index: index,
      wg: wg,
      value: +el
    };
  }).sort((a, b) => a.wg - b.wg);

  let min = {
    bW: {},
    sW: {},
    dif: 999999
  };
  for (let i = 0; i < numW.length - 1; i++) {
    if (min.dif > numW[i + 1].wg - numW[i].wg) {
      min.dif = numW[i + 1].wg - numW[i].wg;
      min.bW = numW[i + 1];
      min.sW = numW[i];
    }
  }
  let fArr = numW.filter(e => e.wg === min.sW.wg).sort((a, b) => a.index - b.index);
  if (fArr.length < 2) {
    return [
      [min.sW.wg, min.sW.index, min.sW.value],
      [min.bW.wg, min.bW.index, min.bW.value]
    ];
  }
  return [
    [fArr[0].wg, fArr[0].index, fArr[0].value],
    [fArr[1].wg, fArr[1].index, fArr[1].value]
  ];
}
