//Bind()
one of them. Let’s begin with the Bind method.
JavaScript’s Bind Method
We use the Bind () method primarily to call a function with the this value set explicitly. It other words, bind () allows us to easily set which specific object will be bound to this when a function or method is invoked.
This might seem relatively trivial, but often the this value in methods and functions must be set explicitly when you need a specific object bound to the function’s this value

//In JavaScript, we can pass functions around, return them, borrow them, and the like. And the bind () method makes it super easy to borrow methods.

//JavaScript’s Bind Allows Us to Curry a Function
Function Currying, also known as partial function application, is the use of a function (that accept one or more arguments) that returns a new function with some of the arguments already set. The function that is returned has access to the stored arguments and variables of the outer function. This sounds way more complex than it actually is, so let’s code


//Apply(), Call()

//JavaScript’s Apply and Call Methods The Apply and Call methods are two of the most often used Function methods in JavaScript, and for good reason: they allow us to borrow functions and set the this value in function invocation. In addition, the apply function in particular allows us to execute a function with an array of parameters, such that each parameter is passed to the function individually when the function executes—great for variadic functions; a variadic function takes varying number of arguments, not a set number of arguments as most functions do

//The most common use for the Apply and Call methods in JavaScript is probably to borrow functions. We can borrow functions with the Apply and Call methods just as we did with the bind method, but in a more versatile manner.

//Borrowing String Methods with Apply and Call
Like the preceding example, we can also use apply () and call () to borrow String methods. Since Strings are immutable, only the non-manipulative arrays work on them, so you cannot use reverse, pop and the like.
//Borrow Other Methods and Functions
Since we are borrowing, lets go all in and borrow from our own custom methods and functions, not just from Array and String:
