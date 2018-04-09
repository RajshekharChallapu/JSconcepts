let add = function(a, b){
    return a+b;
}
let multiply = function(a, b){
    return a*b;
}
let doWhatever = function(a,b){
    console.log('here are your two numbers back ${a} , ${b}');
}

let calc = function(num1, num2, callback){
   /*
    if(calcType === "add"){

        return num1 + num2;
    } else if(calcType === "multiply"){
        return num1* num2;
    }*/

    return callback(num1,num2);
};


console.log(calc(4,6, function(a,b){//annonymous function
    return a-b;// we can use anonymous functions to call...we don't have to define function like above..add,multiply and doWhatever
}));//calling add function
