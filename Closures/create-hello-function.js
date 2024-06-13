/**
 * This function creates another function that, when called, always returns the string "Hello World".
 * The inner function can accept any number of arguments, but it will ignore them and still return "Hello World".
 * The approach involves defining a constant greeting inside the outer function and returning it from the inner function.
 * @return {Function}
 */
var createHelloWorld = function () {
  const greeting = "Hello World";
  return function () {
    return greeting;
  };
};

const func = createHelloWorld();

console.log(func());
