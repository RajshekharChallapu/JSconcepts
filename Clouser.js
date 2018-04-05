
function showName(firstName, lastNmae){
    var nameIntro = "My name is";
    
    //// this inner function has access to the outer function's variables, including the parameter​
function makeFullName(){
    return nameIntro + firstName + "" + lastName;
    
}
    return makeFullName();
}

showName("raja", "challa" );

//Closures have access to the outer function’s variable even after the outer function returns: