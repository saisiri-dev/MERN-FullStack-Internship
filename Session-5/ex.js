// Function to find sum of 1..n
let sumN = function (n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s = s + i;
    }
    return s;
};

// Example usage
let result = sumN(5);
console.log("\n\tSum of natural numbers: " + result);

// Try with another number
console.log("Sum of first 20 numbers: " + sumN(20));
