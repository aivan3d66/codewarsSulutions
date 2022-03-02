// My grandfather always predicted how old people would get,
// and right before he passed away he revealed his secret!
//
// In honor of my grandfather's memory we will write a function using his formula!
//
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

const predictAge = (age1, age2, age3, age4, age5, age6, age7, age8) => {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i];
    arr[i] *= arr[i];
  }
  return Math.floor(Math.sqrt(arr.reduce((acum, e) => acum += e)) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))