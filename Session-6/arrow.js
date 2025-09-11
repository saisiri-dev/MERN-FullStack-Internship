// Arrow Functions Examples

// Simple arrow function
const greet = (name) => `Hello, ${name}! 👋`;
console.log(greet("Siri"));

// Arrow function with multiple parameters
const sum = (a, b) => a + b;
console.log("Sum of 5 + 3 =", sum(5, 3));

// Arrow function with template literals
const area = (length, breadth) => `Area = ${length * breadth}`;
console.log(area(10, 20));

// Callback example
const calculate = (a, b, callback) => callback(a, b);
console.log("Multiplication =", calculate(5, 6, (x, y) => x * y));
