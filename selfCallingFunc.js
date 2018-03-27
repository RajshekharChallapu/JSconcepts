//Also Called Self-invoked Anonymous Function or Immediately Invoked Function Expression(IIFE).

//It is a function that executes automatically when we create it

//Initialization starts and only once


(function(){    // anonymous function.. invokes immediately

var counter =10;   //not accessble to other function
counter ++;

})();  //invoking immediately
//ends here


function SomeFun(){
    counter= counter +1; // throw some exception..like not defined

}
SomeFun();



