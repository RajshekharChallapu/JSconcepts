// If you don't declare your local variables with the var keyword, they are part of the global scope​
​var name = "global variable1";
​
​function showCelebrityName () {
	console.log (name);
}
​
​function showOrdinaryPersonName () {
	name = "global variable 2";// makes global varible, because no var keyword for declaration..it will overwrite the "name" data
	console.log (name);
}
showCelebrityName (); // global variable1​

​
​// name is not a local variable, it simply changes the global name variable​
showOrdinaryPersonName (); // global variable 2​

​
​// The global variable is now global variable 2, not the celebrity name anymore​
showCelebrityName (); // global variable 2​

​
​// The solution is to declare your local variable with the var keyword​
​function showOrdinaryPersonName () {
	var name = "global variable 2"; // Now name is always a local variable and it will not overwrite the global variable​

	console.log (name);
}
