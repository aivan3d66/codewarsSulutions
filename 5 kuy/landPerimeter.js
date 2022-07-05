// Task:
//   Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:
//
//   ['XOOXO',
//     'XOOXO',
//     'OOOXO',
//     'XXOXO',
//     'OXOOO']

// should return: "Total land perimeter: 24",
// while

//   ['XOOO',
//     'XOXO',
//     'XOXO',
//     'OOXX',
//     'OOOO']
//
//   should return: "Total land perimeter: 18"
//
// Good luck!

function landPerimeter(arr) {
  let perimiter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let z = 0; z < arr[i].length; z++) {
      if (arr[i][z] === 'X') {
        perimiter += 4;
        if (arr[i][z + 1] === 'X') perimiter--;
        if (arr[i][z - 1] === 'X') perimiter--;
        if (typeof arr[i - 1] !== 'undefined')
          if (arr[i - 1][z] === 'X') perimiter--;
        if (typeof arr[i + 1] !== 'undefined')
          if (arr[i + 1][z] === 'X') perimiter--;
      }
    }
  }
  return "Total land perimeter: " + perimiter;
}
