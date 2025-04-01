//Callback  function is a function that you pass as an argument to anoter function. it gets executed after a cretain task is completed

// const print = ()=>{
//     console.log("printing press")
// }

// const print2 = ()=>{ //this function is defind but not call so not run
//     console.log("printing press 2")
// }

// const test = (name,callback)=>{ //here name is a normal variable and callback is a function you can rename it
//     console.log("inside the test function",name)
//     callback();
// }

// test('mohan',print)


/* Callback Function – Easy Explanation for a 10-Year-Old 🎈
Imagine you order a pizza  from a restaurant. You tell them:

 "Call me when the pizza is ready!" 

Here, you are giving your phone number (callback function) to the restaurant (another function). When the pizza is ready, they will call you back!*/
function makePizza(callback) {
    console.log("Making pizza... 🍕");
    setTimeout(() => {
        console.log("Pizza is ready! 🎉");
        callback(); // Calling the callback function
    }, 2000);
}

function eatPizza() {
    console.log("Eating the pizza! 😋");
}

makePizza(eatPizza); // Passing eatPizza as a callback
