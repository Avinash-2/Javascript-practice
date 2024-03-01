// Memory will be allocated for the variables, functions as a first step in execution context
// For variables memory will be created and it will have value as undefined until assigning value to the variable line is executed
// For function entire code of the function will be available in the memory

// code 1

// Here we are having one variable x and function test
console.log(x, test); // value of x will be undefined as it is still not assigned to any value yet
// test will log entire test function
var x = 10; // after assigning value to x undefined will be replaced with 10 in memory of execution context
function test() {
    console.log(x); // it will log 10 as we are accessing x after value for it is assigned
}
test(); // test funciton is invoked which will create function execution context and will push to call stack





// code 2

// In this code we are having function testTwo declared in global scope, y global variable decalred inside the funciton test
// here memory will be created only for function testTwo 
// memory for global variable will be created in global scope only after that line of code is executed

console.log(y); // it will give reference Error: y is not defined as still assigning global variable y line of code is not executed

function testTwo() {
    y = 20; // here global variable y is created in global scope memory and can be accessed on further line of code execution 
}

testTwo(); // test function is invoked so code inside test function will be executed
console.log(y); // here it will log value of global variable y 20



// code 3

// In this code we are having two functions testThree declared in global scope
// here memory will be created only for function testThree that is declared last
testThree();

function testThree(){
    console.log('inside 1st declaration');
}

function testThree() {
    console.log('inside 2nd declaration');
}

testThree(); // inside 2nd declaration will be logged