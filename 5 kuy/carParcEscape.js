// A multi-storey car park (also called a parking garage, parking structure, parking ramp, parkade, parking building, parking deck or indoor parking) is a building designed for car parking and where there are a number of floors or levels on which parking takes place. It is essentially an indoor, stacked car park. Parking structures may be heated if they are enclosed.
//
// Design of parking structures can add considerable cost for planning new developments, and can be mandated by cities or states in new building parking requirements. Some cities such as London have abolished previously enacted minimum parking requirements (Source Wikipedia)
//
// Task
// Your task is to escape from the carpark using only the staircases provided to reach the exit. You may not jump over the edge of the levels (you’re not Superman!) and the exit is always on the far right of the ground floor.
//   Rules
// 1. You are passed the carpark data as an argument into the function.
//
// 2. Free carparking spaces are represented by a 0
//
// 3. Staircases are represented by a 1
//
// 4. Your parking place (start position) is represented by a 2 which could be on any floor.
//
// 5. The exit is always the far right element of the ground floor.
//
// 6. You must use the staircases to go down a level.
//
// 7. You will never start on a staircase.
//
// 8. The start level may be any level of the car park.
//
// 9. Each floor will have only one staircase apart from the ground floor which will not have any staircases.
//   Returns
// Return an array of the quickest route out of the carpark
//
// R1 = Move Right one parking space.
//
//   L1 = Move Left one parking space.
//
//   D1 = Move Down one level.
//   Example
// Initialise
// carpark = [[1, 0, 0, 0, 2],
//   [0, 0, 0, 0, 0]];
// Working Out
// - You start in the most far right position on level 1
// - You have to move Left 4 places to reach the staircase => "L4"
//   - You then go down one flight of stairs => "D1"
//   - To escape you have to move Right 4 places => "R4"
// Result
// result = ["L4", "D1", "R4"]

function escape(carpark) {
  let result = [],
    pos = findStart();

  for (let i = 0; i < carpark[pos[0]].length;) {
    if (pos[0] === carpark.length - 1 && pos[1] === carpark[carpark.length - 1].length - 1) {
      break;
    }
    if (pos[0] === carpark.length - 1 && pos[1] !== carpark[carpark.length - 1].length) {
      result.push("R" + (carpark[carpark.length - 1].length - pos[1] - 1));
      break;
    }
    if (carpark[pos[0]][i] === 1) {
      if (i > pos[1]) result.push("R" + (i - pos[1]));
      else result.push("L" + (pos[1] - i));

      let deep = 1;
      if (carpark[pos[0] + 1][i] === 1) {
        for (let j = pos[0] + 1; j < carpark.length; j++)
          if (carpark[j][i] === 1) deep++;
          else break;
      }

      result.push("D" + deep);

      pos[0] += deep;
      pos[1] = i;
      i = 0;
      continue;
    }
    i++;
  }

  return result;

  function findStart() {
    for (let i = 0; i < carpark.length; i++) {
      for (let z = 0; z < carpark[i].length; z++) {
        if (carpark[i][z] === 2) return [i, z];
      }
    }
  }
}
