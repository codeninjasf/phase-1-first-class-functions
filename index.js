// write code below
//
function sleep(){
    return "I need some sleep badly!";
}

function receivesAFunction(rest){
    sleep();
    rest();
}

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function (){}
}