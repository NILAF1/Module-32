function sum(a, b, c){
//    console.log(arguments); //Array like Object.
    // console.log(arguments[3]);
    const arg = [...arguments]; // Array like Object ----------to-------- Array
    console.log(arg);

   const result = a + b + c;
   return result;   
}

const elements = sum(12, 45, 76, 86, 23, 64, 77);
console.log(sum); //I don't know.If you interested please "run it".Ha ha ha...
console.log(typeof sum); //To check type
console.log(sum.length); //To check function parameter number
console.log(elements);