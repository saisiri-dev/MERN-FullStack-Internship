// hoisting.js

function hoistVar() {
  console.log('hoistVar - before var a:', a); // prints 'undefined' due to hoisting
  var a = 5;
  console.log('hoistVar - after var a:', a);  // 5
}

function hoistLet() {
  try {
    console.log('hoistLet - before let b:', b); // ReferenceError
  } catch (err) {
    console.log('hoistLet - error before let b:', err.message);
  }
  let b = 10;
  console.log('hoistLet - after let b:', b); // 10
}

hoistVar();
hoistLet();
