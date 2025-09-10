// Session 3: JavaScript Practice Code

// ✅ typeof operator
console.log(typeof "Hello");     // string
console.log(typeof 123);         // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (special case in JS)
console.log(typeof {});          // object

// ✅ Objects
let person = {
  name: "Siri",
  age: 20,
  city: "India"
};

console.log(person.name);        // Siri
console.log(person["city"]);     // India

for (let key in person) {
  console.log(key, ":", person[key]);
}

// ✅ Arrays
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Apple

for (let fruit of fruits) {
  console.log(fruit);
}

// ✅ Comparison Operators
console.log(5 == "5");   // true  (value only)
console.log(5 === "5");  // false (value + type)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// ✅ Logical Operators
console.log(true && true);   // true
console.log(true && false);  // false
console.log(5 && 10);        // 10
console.log(0 && 10);        // 0
