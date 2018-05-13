//Bind allows us to borrow methods
// In JS we can pass functions around,return them, borrow them ..and bind() method makes it easy to borrow methods
var obj ={num :2};
var addToThis = function(a,b,c){
    return this.num +a+b+c;
};
var arr = [1,2,3];
var bound = addToThis.bind(obj);
console.log(bound(2,4,6));


// Example 2
// here we have cars objects that does
not have method to print its data to the console

var cars={
    data:[
        {name:"Honda Accord", age:23},
        {name: "Tesla", age:2}
    ]
}


//here we bind the users.showData method to the cars object we just created.
cars.showData =user.showData.bind(cars);
cars.showData();// honda Accord 14















