/* eslint-disable no-template-curly-in-string */
// the most fundamental test

/*

write a test that reveals the bug.
Write code that throws an error with a helpful message about the bug,
but only if there's a bug.
So... if (calling sum with some numbers doesn't return the right thing) {
  then throw an error with a helpful message
}

Then run this code with `node 1.todo`

> Make sure you're in the right directory!

Bonus, write another test that would throw an
error if the subtract function were to have a bug

*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a - b
const subtract = (a, b) => a - b

let actual = sum(2, 6);
let expected = 8;
try {
  if (actual !== expected) {
    throw new Error(`There seems to be a problem with your sum function. Expected ${expected} but got ${actual}`);
  } else {
    console.log('PASS');
  }
} catch (e) {
  console.log("!!!!~ an error from add's catch block : " + e);
}

console.log('\n\n')

// console.log("before subtract setup")
// actual = subtract(12, 4);
// expected = 8;
// // console.log("after subtract setup")
// if (actual !== expected) {
//   // console.log('before subtraction throw')
//   // const e = new Error(`There seems to be a problem with your subtract function. Expected ${expected} but got ${actual}`);
//   // console.log(e)
//   // console.log('after subtraction throw')
//   throw new Error(`There seems to be a problem with your subtract function. Expected ${expected} but got ${actual}`);
// }

actual = subtract(12, 4);
expected = 8;
try {
  if (expected !== actual) {
    throw new Error(`There seems to be a problem with your subtract function. Expected ${expected} but got ${actual}`);
  } else {
    console.log('PASS');
  }
} catch (e) {
  console.log("!!!!~ an error from subtract's catch block : " + e);
}
