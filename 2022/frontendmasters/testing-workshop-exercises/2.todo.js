// writing an assertion library
/*

Now let's implement our own assertion library.
Create a function called `expect` that accepts an "actual"
and returns an object of assertions.

Tip: I want to be able to use it like so:

> expect(actual).toBe(expected)

Then run this code with `node 2.todo`

> Make sure you're in the right directory!

 */

// const { execPath } = require('process');
const { add, subtract } = require('./math')

const expect = actual => {
  return {
    toBe: expected => {
      try {
        if (actual !== expected) {
          throw new Error(`Problem with your function. Expected ${actual} to be ${expected}.`);
        } else {
          console.log("PASS")
        }
      } catch (e) {
        console.log(e);
      }
    },
  }
};

let actual = add(8, 14);
let expected = 22;
expect(actual).toBe(expected);

actual = subtract(44, 36);
expected = 8;
expect(actual).toBe(expected);