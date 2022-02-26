// Task
// Given an array of integers, your function
// should return a new array equivalent to performing exactly
// 1 complete pass on the original array. Your function should
// be pure, i.e. it should not mutate the input array.

const integers = [9, 7, 5, 3, 1, 2, 4, 6, 8];

const bubbleSortOnce = (a) => {
  let newArr = a.slice();
  let temp;
  for (let i = 0; i <newArr.length -1; i ++){
    if (newArr[i + 1] < newArr[i]) {
      temp = newArr[i];
      newArr[i] = newArr[i + 1];
      newArr[i + 1] = temp;
    }
  }
  return newArr;
}

console.log( bubbleSortOnce(integers) );