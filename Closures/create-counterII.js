/**
 * This function creates a counter with an initial value and returns an object with increment, decrement, and reset methods.
 * The increment method increases the counter by 1, the decrement method decreases it by 1, and the reset method resets it to the initial value.
 * The approach involves using a closure to maintain the current value of the counter and modify it through the returned methods.
 * @param {integer} init - The initial value of the counter.
 * @return {Object} An object with increment, decrement, and reset methods.
 */
var createCounter = function (init) {
  let presentValue = init;

  return {
    increment: () => {
      return ++presentValue;
    },
    decrement: () => {
      return --presentValue;
    },
    reset: () => {
      return (presentValue = init);
    },
  };
};

/**
 * Example usage:
 */
const counter1 = createCounter(5);
console.log(counter1.increment()); // 6
console.log(counter1.reset()); // 5
console.log(counter1.decrement()); // 4

const counter2 = createCounter(0);
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset()); // 0
console.log(counter2.reset()); // 0
