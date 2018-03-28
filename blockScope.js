//Using let...Even when using ES2015, the var statement does not create block scope. In order to create block scope, we need to use either the let or const statements inside a block. We’ll come back to const shortly. For now, let’s focus on let.



function fn() {
  var variable1 = 'function scope';

  if (true) {
    let variable2 = 'block scope';
  }

  console.log(variable1, variable2); // Uncaught ReferenceError: variable2 is not defined
}
fn();
