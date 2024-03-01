
//handling promise using then, catch

const pr = new Promise((resolve, reject) => {
    resolve("promise resolved value")
})

function getData() {
    pr.then((res) => console.log(res));
}

// getData();


// handling promise using async await

async function getDataWithAsync() {
    const value = await pr; // await can be used only inside async function, written in front of promise that will resolves the promise
    console.log(value)
}

// getDataWithAsync();

const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("promise resolved after 10 sec")
    }, 10000)
})

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("promise resolved after 5 sec")
    }, 5000)
})

//handle promise using then
function handlPromise() {
    promise.then((res)=> console.log(res)); // it will register the promise and keep the call back separately to execute once it is resolved
    console.log('then promise resolve') // JS engine will not wait for promise to be resolved it will execute even promise is pending
}
handlPromise();

async function handlePromiseUsingAsync() {
    console.log('start of handle promise using async'); // it will be executed
    const valueTwo = await promiseTwo; // as soon as it sees await keyword it will suspend handlePromiseUsingAsync execution, 
                                // handlePromiseUsingAsync will move out of call stack so it will not block the main thread so it will not freeze the page
                                // it will wait until promiseTwo is resolved (after 5 sec as per promiseTwo code)
                                // once promise is resolved handlePromiseUsingAsync will again come inside call stack
    console.log(valueTwo);         // and start executing from where it left

    const value = await promise; // this promise will not be resolved by this time as it will resolve after 10 sec (as per promise code)
                                 // it will suspend handlePromiseUsingAsync execution and move it out of call stack
                                 // once promise is resolved after 10 sec handlePromiseUsingAsync will again come inside call stack
    console.log('in next line after 10 sec promise resolve'); // and start executing from where it left
    console.log(value);          
}

handlePromiseUsingAsync() // after this line handlePromiseUsingAsync is pushed into call stack

async function handlePromiseWithAsyncTwice() {
    console.log('at the start of the async function')
    const value = await promise; // Js engine was waiting for promise to resolved
    console.log('async 1st next line'); // It will be executed only after the promise is resolved (which we are resolving with await)
    console.log(value);
    const secondValue = await promise;
    console.log('async 2nd next line');
    console.log('secondValue -> ', secondValue); // It will be executed after first promise is resolved it will not take time to resolve secondvalue promise
}

handlePromiseWithAsyncTwice();