// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of ab^ba
// Note that aaa and bbb may be very large!
//
// // lastDigit("4", "1")            // returns 4
// // lastDigit("4", "2")            // returns 6
// // lastDigit("9", "7")            // returns 9
// // lastDigit("10","10000000000")  // returns 0

var lastDigit = function (str1, str2) {
  let key = [0, 0, 0, 0, 1, 1, 1, 1, 6, 2, 4, 8, 1, 3, 9, 7, 6, 4, 6, 4, 5, 5, 5, 5, 6, 6, 6, 6, 1, 7, 9, 3, 6, 8, 4, 2, 1, 9, 1, 9];
  let i = +str1.slice(-1);
  let j = str2.slice(-2) % 4;
  if (str2 == '0') return 1;
  return key[4 * i + j];
}
