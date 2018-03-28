//In JavaScript, a block is one or more statements within curly brackets. Conditional expressions, such as if, for, and while statements, all use blocks to execute statements based on certain conditions.


function fn() {
  var x = 'function scope';

  if (true) {
    var y = 'not block scope';
  }

  function innerFn() {
    console.log(x, y); // function scope not block scope
  }
  innerFn();
}

//The var statement is not able to create a block scope, even when used within a block, so the console.log statement is able to access both the x and y variables. The fn function creates a function scope and both the x and y variables are accessible via the scope chain within that scope.
