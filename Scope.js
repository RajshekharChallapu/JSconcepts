
//this fucntion can't access inner function variables
function Outer(){//global function

    var variable1;
//below inner funciton can access above function variables..as it is nested inside that func
    function innner(){// nested function
        var variable2;
    }
}

//Function scopes may be nested within other function scopes, but the same rules around the scope-chain look-up apply, so the inner scope can access both variable1 and variable2, but the outer scope can only access variable1.
