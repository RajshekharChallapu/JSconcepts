
//A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. A callback function is essentially a pattern (an established solution to a common problem), and therefore, the use of a callback function is also known as a callback pattern.

let x = function(){
    console.log("I am called from inside a function")
};

let y = function(callback){
    console.log('do somthing');
    callback();
}
y(x);


