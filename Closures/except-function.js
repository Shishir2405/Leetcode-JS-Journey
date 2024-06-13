/**
 * This function takes a value and returns an object with two methods: toBe and notToBe.
 * The toBe method checks if the given value matches the initial value, throwing an error if not.
 * The notToBe method checks if the given value does not match the initial value, throwing an error if they are equal.
 * @param {string} val - The initial value to compare against.
 * @return {Object} An object with toBe and notToBe methods.
 */
var expect = function (val) {
  return {
    toBe: function (value) {
      if (val === value) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (value) {
      if (val !== value) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

/**
 * Example usage:
 */
console.log(expect(5).toBe(5)); // true
// console.log(expect(5).notToBe(5)); // throws "Equal"
