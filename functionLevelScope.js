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






/*No Block-Level Scope*/
var name = "Am global";
​// the blocks in this if statement do not create a local context for the name variable​

​if (name) {
	name = "Am block scope at global level you can change me"; // this name is the global name variable and it is being changed here​


	console.log (name); // Am block scope at global level you can change me: still the global variable​
}
​
​// Here, the name variable is the same global name variable, but it was changed in the if statement​
console.log (name); // Am block scope at global level you can change me

