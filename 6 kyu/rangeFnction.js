// Create range generator function that will take up to 3 parameters - start value, step and stop value.
// This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.
//
// Examples:
//
// range(5) --> 1,2,3,4,5
// range(3, 7) --> 3,4,5,6,7
// range(2, 3, 15) --> 2,5,8,11,14

let range = function (start, step, stop) {
  let arr = [];
  if (arguments.length === 1)
    for (let i = 1; i <= start; i++) {
      arr.push(i);
    }
  else if (arguments.length === 2)
    for (let i = start; i <= step; i++) arr.push(i);
  else if (arguments.length === 3)
    for (; start <= stop; start += step) arr.push(start);
  return arr;
};
