// writing a testing framework
/*

Let's improve our error messages a bit, create a function
called `test` which can be given a title and a callback.

Then add a try/catch so you can log the title with
a note of success or error.

Then wrap each of your tests in a `test` function.

This also means that we can run all the tests even
if one of them fails!

Example of test function
test(title, () => {
  // arrange
  // act
  // assert
}

Then run this code with `node 3.todo`

> Make sure you're in the right directory!

 */

const { add, subtract } = require('./math')

const test = (title, callback) => {
  console.log(title);
  callback();
};

const expect = actual => {
  return {
    toBe: expected => {
      try {
        if (actual !== expected) {
          throw new Error(`[FAIL]~> Got ${actual} but expected ${expected}.`);
        } else {
          console.log("[PASS]");
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
};

test(
  "Add function should add two numbers.",
  () => {
    let actual = add(9, 9);
    let expected = 18;
    expect(actual).toBe(expected);
  }
);

test(
  "Subtract function should subtract two numbers.",
  () => {
    let actual = subtract(9, 9);
    let expected = 0;
    expect(actual).toBe(expected);
  }
);
