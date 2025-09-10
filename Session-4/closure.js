// closure.js
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    console.log('count:', count);
  };
}

const counter = makeCounter();
counter(); // count: 1
counter(); // count: 2
