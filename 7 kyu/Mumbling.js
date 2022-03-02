// This time no story, no theory.
// The examples below show you how to write function accum:

const accum = (s) => {
  return s.split('').map((e, i) => {
    return e.toUpperCase() + e.toLowerCase().repeat(i)
  }).join('-');
}

console.log(accum("ZpglnRxqenU"))