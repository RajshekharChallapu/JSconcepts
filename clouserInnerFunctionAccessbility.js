
//important and features with closures is that the inner function still has access to the outer function’s variables even after the outer function has returned

function outerFun(firstName){
var myIntro = "This is";

    //inner function has access to outer function variables including parameter
    function innerFun(lastname){
        return  myIntro+ firstName + "" +lastname;
    }
    return innerFun;
}
var completeName = outerFun("Raja");//// At this  the outerFun.... outer function has returned

//The closure (innerFun) is called here after the outer function has returned above​
//Yet, the closure still has access to the outer function's variables and parameter​

completeName("chal");//this is Raja Chal












