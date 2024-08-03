// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  //return array.map((array) => callback(array))
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  array.forEach((element) => callback(element));
}

// see for yourself if your forEach works!

/*
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);
*/

// Challenge 5
function mapWith(array, callback) {
  let newArray = [];
  array.forEach((element) => newArray.push(callback(element)));
  return newArray;
}

// Challenge 6
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0));   //-> 8

// Challenge 7
function intersection(arrays) {
  return arrays.reduce((accumulator, currentArray) => {
    return accumulator.filter((item) => currentArray.includes(item));
  });
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

// Challenge 8
function union(arrays) {
  return arrays.reduce((accumulator, currentArray) => {
    currentArray.forEach((item) => {
      if (!accumulator.includes(item)) {
        accumulator.push(item);
      }
    });
    return accumulator;
  }, []);
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  // initialize accumulator as an empty object
  return array1.reduce((accumulator, currentElement, index) => {
    // check if the result of `callback(currentElement)` matches the corresponding element in array2 at the same index
    if (callback(currentElement) === array2[index]) {
      accumulator[currentElement] = array2[index];
    }
    return accumulator;
  }, {});
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const result = {};

  arrVals.forEach((arrVal) => {
    result[arrVal] = arrCallbacks.map((arrCallback) => arrCallback(arrVal));
  });

  // return an object whose keys match the elements in the array of values
  return result;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  // declare result object
  const newObj = {};

  for (let key in obj) {
    //console.log(obj[key]);
    if (callback(key) === obj[key]) {
      newObj[key] = callback(key);
    }
  }
  // return result object
  return newObj;
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  // the concise solution
  let falseRulings = 0;
  let trueRulings = 0;

  // iterate through the array and perform callback on each element
  for (let i = 0; i < array.length; i++) {
    // callback returns true or false, increment accordingly
    callback(array[i]) ? trueRulings++ : falseRulings++;
  }

  //console.log(`The number of false rulings is ${falseRulings}. The number of true rulings is ${trueRulings}`);

  // if true returns equal false returns, marjority is false
  return trueRulings > falseRulings;

  /* the verbose solution
  let falseRulings = 0;
  let trueRulings = 0;
  let majorityRuling = false;

  // iterate through the array and perform callback on each element
  for (let i = 0; i < array.length; i++) {
    // callback returns true or false
    if (callback(array[i])) {
      trueRulings++;
    } else {
      falseRulings++;
    }
  }

  console.log(
    `The number of false rulings is ${falseRulings}. The number of true rulings is ${trueRulings}`
  );
  // if true returns equal false returns, marjority is false
  if (falseRulings > array.length / 2) {
    return false;
  }
  if (trueRulings > array.length / 2) {
    return true;
  }

  return false;
  */
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    // the callback will return true/false, add it to the array depending on true/false
    callback(array[i]) ? newArray.unshift(array[i]) : newArray.push(array[i]);
  }
  //return new array
  return newArray;
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {
  let newObject = {};
  // iterate through the array and perform the callback on each element
  for (let i = 0; i < array.length; i++) {
    // each return value from the callback will be saved as a key on the object
    const key = callback(array[i]);
    // value associated with each key will be the number of times that particular return value was returned
    newObject[key] ? newObject[key]++ : (newObject[key] = 1);
  }
  return newObject;
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  let newObj = {};

  array.forEach((element) => {
    // each return value is saved as a key on the object
    const key = callback(element);
    // if the key doesn't exist in the object, an empty array is created for it
    if (!newObj[key]) {
      newObj[key] = [];
    }
    // the element is pushed into the array corresponding to the key
    newObj[key].push(element);
  });
  return newObj;
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  let newArray = [];
  // iterate through the object and perform callback on each value
  //Object.keys(obj).forEach(key => {
  for (let key in obj) {
    // callback will return true/false
    const result = callback(obj[key]);
    // return an array consisting only the keys whos values yielded true
    if (result) {
      newArray.push(key);
    }
    //console.log(`Key: ${key}, Value: ${thing}`);
  }
  return newArray;
}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  const result1 = func2(func1(value));

  const result2 = func1(func2(value));

  return result1 === result2;
}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  // make a new object
  let newObj = {};
  // iterate through passed-in object
  for (let key in obj) {
    // using each key as input for the callback
    if (obj[key] === callback(key)) {
      // if the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object
      newObj[key] = obj[key];
    }
  }
  // return new object
  return newObj;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  let percentage = 0;
  let trueResponse = 0;
  // loop through the array
  arrOfFuncs.forEach(function (element) {
    console.log(element(value));
    // pass the value into the function
    // all the functions in the array will return true or false
    if (element(value)) {
      trueResponse++;
      console.log(`The count of true responses is now ${trueResponse}`);
    }
    //console.log(trueResponse);
  });
  // ratings should return the percentage of functions from the array that return true when the value is used as input
  percentage = (trueResponse / arrOfFuncs.length) * 100;
  //return percentage;
  return percentage;
}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
