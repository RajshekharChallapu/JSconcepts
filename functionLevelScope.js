/*Local Variables (Function-level scope)*/

//Variables have either a local scope or a global scope.


//Variables declared within a function are local variables and are only accessible within that function or by functions inside that function.
var name = "Am global variable";
​
​function showName () {
    // local variable; only accessible in this showName function​
	var name = "Am local variable";
	console.log (name); // ​Am local variable
}
console.log (name); //Am global variable : the global variable




