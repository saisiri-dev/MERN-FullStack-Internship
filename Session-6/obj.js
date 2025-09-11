// Objects and Classes in JavaScript

// Object
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2024,
  start: function () {
    return `${this.brand} ${this.model} is starting...`;
  },
};

console.log("Car Object:", car);
console.log("Car Start Method:", car.start());

// Class
class Mobile {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  getDetails() {
    return `Mobile: ${this.brand} - ${this.model}`;
  }
}

const phone = new Mobile("Apple", "iPhone 15");
console.log(phone.getDetails());

// Updating object dynamically
car.year = 2025;
car.color = "Red";
console.log("Updated Car:", car);
