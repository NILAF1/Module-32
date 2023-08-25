function greeting(greetingHandler, x){ //Mother function
    greetingHandler(x)

}


function greetingHandler(x){
    console.log('Good Morning', x);
}


greeting(greetingHandler, 'Hasib');
greeting(greetingHandler, 'Nafis');





//Using Multiple parameter 
function greeting1(greetingHandler1, x ,y){ //Mother function
    greetingHandler1(x,y)

}


function greetingHandler1(x ,y){
    console.log('I am chid function', x ,y);
}


greeting1(greetingHandler1, 'Hello Bro!')













//Use multiple function
function greeting2(isAFunction, name){ //Mother function
    isAFunction(name)
        
}

function greetingHandler2(name){ //Function-01
    console.log('Good Evening', name);
}

function greetingHandler3(name){//Function-02
    console.log('Good Morning', name);
}


greeting2(greetingHandler3, 'Akkas Ali');//Call the function 
greeting2(greetingHandler2, 'Mr.Mojid'); //Call the function