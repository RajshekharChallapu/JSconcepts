//The term scope describes an area in which variables and functions, or identifiers, can be accessed.

var globalVariable = 'This is global'; //can be accessed to anywhere in the file...even inside below two funcitons

function globalFunction1() { //funtion can be accessed..like global bvariable

  var innerVariable1 ='Non-global variable 1';//child scopes of global variable....can only be accessed here in this function only..like abstartcion
}

function globalFunction2() {
  var innerVariable2 = 'Non-global variable 2';//child scopes of global variable....can only be accessed here in this function only..like abstartcion ..like abstraction
}

The global scope contains the globalVariable as well as the two nested function scopes. Each nested function scope contains its own variable, but these variables are not accessible to the global scope
