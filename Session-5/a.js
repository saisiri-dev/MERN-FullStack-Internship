function test() {
    if (true) {
        var x = 10; // function scoped
        let y = 50; // block scoped
        console.log("\n\tInside block");
        console.log("x: " + x);  // works
        console.log("y: " + y);  // works
    }

    console.log("\n\tOutside block");
    console.log("x: " + x); // works (var is accessible outside block)
    try {
        console.log("y: " + y); // error, y is block scoped
    } catch (err) {
        console.log("Error accessing y outside block:", err.message);
    }
}

test();
