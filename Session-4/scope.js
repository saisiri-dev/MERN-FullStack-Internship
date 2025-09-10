// scope.js
function outerFunc() {
  let x = 5;
  let y = 6;

  function innerFunc() {
    let a = 10;               // local to innerFunc
    console.log('inner x =', x); // 5 (accessible)
    console.log('inner y =', y); // 6 (accessible)
    console.log('inner a =', a); // 10
  }

  innerFunc();

  // console.log(a); // Un-commenting this would throw: ReferenceError: a is not defined
}

outerFunc();
