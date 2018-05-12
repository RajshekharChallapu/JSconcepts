//ex: Obj1 and Obj 2 can have separate methods by following functions args..where call, apply, and bind methods


//building object

var obj={num:2}; // property num

//method
var addToThis = function(a, b,c){

    return this.num+a+b+c;
};

console.log(addToThis.call(obj, 4,5,6));//functionname.call(obj, function arguments)//first argumrnt would be obj



