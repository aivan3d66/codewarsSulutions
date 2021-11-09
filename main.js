// Compare Scopes of the var and let Keywords

function checkScope() {
    let i = 'function scope';
    if (false) {
        i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

checkScope();

// Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1]=5;
    s[2]=7;
}
editInPlace();

// Prevent Object Mutation

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();

//  Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//  Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;
console.log(increment(5,2));

//  Use the Rest Parameter with Function Parameters
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(2,3));

//  Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
console.log(arr2);

//  Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today, tomorrow);

//  Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
// Only change code below this line
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday, highTomorrow);

//  Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
console.log(lowToday, highToday);

//  Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
[b, a] = [a, b];
console.log(a,b);

//  Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

//  Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0;
console.log(half(stats));

//  Create Strings using Template Literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    const failureItems = arr.map((item) => `<li class="text-warning">${item}</li>`);
    return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);

//  Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
    return {name,age,gender};
};
console.log(createPerson);

//  Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

//  Remove Items from an Array with pop() and shift()
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

//  Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4);
// Only change code above this line
console.log(arr);

//  Add Items Using splice()
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


//  Copy Array Items Using slice()
function forecast(arr) {
    // Only change code below this line
    return arr.slice(2,4);;
}

//  Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//  Copy an Array with the Spread Operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

//  Combine Arrays with the Spread Operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
}

console.log(spreadOut());

//  Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0) {
        return true;
    } else {
        return false;
    }
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//  Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]);
        }
    }
    // change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//  Create complex multi-dimensional arrays
let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'], //level 2
    [
        ['loop', 'shift', 6, 7, 1000, 'method', 'deep'], //level 3
        [
            ['concat', false, true, 'deeper', 'spread', 'array'], //level 4
            [
                ['deepest', 'mutate', 1327.98, 'splice', 'slice', 'push'] //level 5
            ]
        ]
    ],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
];

//  Add Key-Value Pairs to JavaScript Objects
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);

//  Modify an Object Nested Within an Object
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

//  Access Property Names with Bracket Notation
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    // Only change code below this line
    let inventory = foods[scannedItem];
    return inventory;
    // Only change code above this line
}

console.log(checkInventory("apples"));

//  Use the delete Keyword to Remove Object Properties
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);

//  Check if an Object has a Property
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line
    return ('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj) ? true : false;
    // Only change code above this line
}

console.log(isEveryoneHere(users));

//  Iterate Through the Keys of an Object with a for...in Statement
function countOnline(usersObj) {
    // Only change code below this line
    let n = 0;
    for (let user in usersObj) if (usersObj[user].online) n++;
    return n;
    // Only change code above this line
}

//  Generate an Array of All Object Keys with Object.keys()
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
}

console.log(getArrayOfUsers(users));

//  Modify an Array Stored in an Object
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
}

console.log(addFriend(user, 'Pete'));

//  Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

convertToF(30);

//  Reverse a String
function reverseString(str) {
    let arrayOfString = str.split('');
    let reverseOfArray = arrayOfString.reverse();
    let reverseOfString = reverseOfArray.join('');
    str = reverseOfString;
    return str;
}

reverseString("hello");

//  Factorialize a Number
function factorialize(num) {
    let prevNum = 0;
    let newNum = 1;
    while (prevNum < num) {
        prevNum++;
        newNum *= prevNum;
    }
    return newNum;
}

factorialize(5);

//  Find the Longest Word in a String
function findLongestWordLength(str) {
    // convert string to array and find length of each array item
    let arr = str.split(' ').map(word => word.length);
    console.log(arr);
    //iterate over array to find longest word
    let max = Math.max(...arr);
    console.log(max);
    return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//  Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let max = [];

    for (let i = 0; i < arr.length; i++) {

        let elem = Math.max.apply(null, arr[i]);
        max.push(elem);
        console.log(max);
    }

    return max;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//  Confirm the Ending
function confirmEnding(str, target) {
    let reg = new RegExp(target + '$');
    return reg.test(str);
}

confirmEnding("Bastian", "n");

//  Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    // repeat after me
    let newStr = '';

    // with a 'for' loop
    //   for (i = 0; i < num; i++) {
    //     newStr += str;
    //   }

    // with a 'while' loop
    while (num > 0) {
        newStr += str;
        num--;
    }
    return newStr;
}

repeatStringNumTimes("abc", 3);
