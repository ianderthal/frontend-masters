// CHALLENGE 1
function createFunction() {
  function nestedFunction() {
    console.log("hello");
  }
  return nestedFunction;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  function printFunction() {
    console.log(input);
  }
  return printFunction;
}

// /*** Uncomment these to check your work! ***/
//const printSample = createFunctionPrinter('sample');
//printSample(); // => should console.log('sample');
//const printHello = createFunctionPrinter('hello');
//printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  let step = x;
  function add(start) {
    console.log("addByX", start + step);
    return start + step;
  }
  return add;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
//addByTwo(1); // => should return 3
//addByTwo(2); // => should return 4
//addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  let output;
  function callOnce(x) {
    if (output > 0) {
      return output;
    } else {
      output = func(x);
      return output;
    }
  }
  return callOnce;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {
  let numCalls = 0;
  function calledAfter() {
    numCalls++;
    if (numCalls == count) {
      func();
    }
  }
  return calledAfter;
}

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait) {
  setTimeout(() => {
    func(...params);
  }, wait);
}

// CHALLENGE 7

function rollCall(names) {
  let roll = names;
  function caller() {
    if (roll.length > 0) {
      console.log(roll.shift());
    } else {
      //once all names have been called, it should log 'Everyone accounted for'
      console.log("Everyone accounted for");
    }
  }
  return caller;
}

/* using .shift() is cool but it alters the original array
function rollCall(names) {
  let namesCall = 0;
  // console.log('The number of names in the list is ' + names.length)
  function caller() {
    if (namesCall <= names.length - 1) {
      console.log(names[namesCall]);
      namesCall++;
    } else {
      console.log('Everyone accounted for');
    }
  }
  return caller
}
*/

// /*** Uncomment these to check your work! ***/
//  const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
//  rollCaller() // => should log 'Victoria'
//  rollCaller() // => should log 'Juan'
//  rollCaller() // => should log 'Ruth'
//  rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  // something to keep track of the attempts
  let obj = {};
  function save(x) {
    // when password string matches
    if (magicWord === x) {
      // return an object with all the previously passed-in arguments as keys and the corresponding outputs as values
      return obj;
    } else {
      // push the attempt into obj using bracket notation
      obj[x] = func(x);
      return obj[x];
    }
  }
  return save;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let index = 0;
  function iterate() {
    // retrieve the current element using modulo operator
    const element = array[index % array.length];
    //increment the index
    index++;
    // return the current element
    return element;
  }
  // returns a function
  return iterate;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
//  const getDay = cycleIterator(threeDayWeekend);
//  console.log(getDay()); // => should log 'Fri'
//  console.log(getDay()); // => should log 'Sat'
//  console.log(getDay()); // => should log 'Sun'
//  console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  function firstArg(...params) {
    return func(arg, ...params);
  }
  return firstArg;
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  //returns a function that accepts however many arguments the passed-in function accepts
  function stamp(...params) {
    // return an object
    return {
      //with a date key that contains a timestamp with the time of invocation
      date: new Date().toDateString(),
      //and an output key that contains the result from invoking the passed-in function
      output: func(...params),
    };
  }
  return stamp;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  let pairs = [];
  function change(str1, str2) {
    if (str2) {
      pairs.push({ search: str1, replace: str2 });
      console.log(pairs);
      return;
    } else {
      pairs.map((item) => {
        str1 = str1.replace(item.search, item.replace);
      });
      return str1;
    }
  }
  return change;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  let privateSecret = secret;

  function getSecret() {
    console.log(privateSecret);
    return privateSecret;
  }

  function setSecret(x) {
    privateSecret = x;
  }

  return { getSecret, setSecret };
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2

// CHALLENGE 14
function callTimes() {
  let timesCalled = 0;
  function incrementCounter() {
    timesCalled++;
    console.log(timesCalled);
  }
  return incrementCounter;
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

// CHALLENGE 15
function roulette(num) {
  let n = num;
  function spin() {
    if (n > 1) {
      n--;
      return "spin";
    } else if (n == 1) {
      n--;
      return "win";
    } else {
      return "pick a number to play again";
    }
  }
  return spin;
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
function average() {
  let numbers = [];

  function avgSoFar(num) {
    // if invoked with a number
    if (num) {
      // push the number to numbers array
      numbers.push(num);
    }

    let average = 0;
    // invoked with numbers passed in
    if (numbers.length) {
      // output the current average
      average = numbers.reduce((a, b) => a + b) / numbers.length;
    }
    // if invoked with no numbers passed in, return 0
    return average;
  }
  return avgSoFar;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  let funStuff = arrOfTests;
  function returnFunction(callback) {
    let results = true;
    funStuff.map((item) => {
      if (callback(item[0]) !== item[1]) {
        results = false;
      }
    });
    return results;
  }
  return returnFunction;
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  let history = new Array(limit);

  function myActions(string) {
    // if undo is passed, delete the last save and return deleted string with the word 'undone' after
    if (string === "undo") {
      //if history is empty and 'undo' is passed
      if (history.length === 0) {
        return "nothing to undo";
      } else {
        let undone = history.pop();
        return `${undone} undone`;
      }
    } else {
      // if a string is passed into the function, retrn the string with 'done' after
      if (history.length === limit) {
        history.shift();
      }
      history.push(string);
      return `${string} done`;
    }
  }
  return myActions;
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  // comment goes here
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
