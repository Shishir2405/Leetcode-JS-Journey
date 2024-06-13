/**
 * This function returns a counter function that starts at a given integer n.
 * Each time the counter function is called, it returns the current value of n and increments it by 1.
 * The approach involves returning an inner function that closes over the variable n, allowing it to retain state between calls.
 * @param {number} n - The starting integer for the counter.
 * @return {Function} counter - The counter function.
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

/** 
 * Example usage:
 */
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
