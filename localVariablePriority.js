
//If you declare a global variable and a local variable with the same name, the local variable will have priority when you attempt to use the variable inside a function (local scope):
var name = "Raja";// global varable
​
​function users () {
	// Here, the name variable is local and it takes precedence over the same name variable in the global scope​
​var name = "Challapu";//but name is allows us to changes data..dat given at global level
​
​// The search for name starts right here inside the function before it attempts to look outside the function in the global scope​
console.log (name);
}
​
users (); // Challapu
