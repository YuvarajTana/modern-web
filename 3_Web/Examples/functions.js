/*
    Initializating and invoking a function
*/

// Normal function  
function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello();


// Arrow function 
const sayHello1 = (name) => {
    console.log(`Hello ${name}`);
};
sayHello1();



/*
    Return values from a function
*/
function printNanme(name){
    return name
}

const printNanme1 = (name) => {
    return name
}

const printNanme2 = (name) => name;


/*
   arguments object
*/