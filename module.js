

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return a / b;
// }

// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide
// };



//2

// stringUtils.js

// function capitalize(str) {
//   if (!str) return '';
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// // Export functions
// module.exports = {
//   capitalize,
//   reverse,
// };





// index.js

const math = require('./math');
const stringUtils = require('./stringUtils');

// Math tests
console.log("Add: 5 + 3 =", math.add(5, 3));
console.log("Subtract: 10 - 4 =", math.subtract(10, 4));
console.log("Multiply: 6 * 7 =", math.multiply(6, 7));
console.log("Divide: 20 / 4 =", math.divide(20, 4));

// String tests
console.log("Capitalize 'hello':", stringUtils.capitalize('hello'));
console.log("Reverse 'world':", stringUtils.reverse('world'));
