//function is block of code designed to perform a particular task.  it is executed it is invoked or called

//*********normal function*****************
function print(){
    console.log('suman')
}

print();


//*****(function with parameter)************* */
// function sum(a,b){
//     console.log(a +b );
// }

// sum(10,20); //call many time
// sum(5,50);


//*****return function***********************
/*A return function is like a calculator. You give it numbers, and it gives you back the answer.

Example:
Imagine you ask a shopkeeper the price of 2 apples. He calculates and gives you the total price. */


// function getTotalPrice(pricePerApple, quantity) {
//     return pricePerApple * quantity; // Returns the total price
// }

// let total = getTotalPrice(10, 2); 
// console.log(total); // Output: 20


// function greet(name){
//     return `Hello ${name}`
// }

// let result = greet('suman');
// console.log(result);

// console.log(greet('sumit')); //anoter way to call


















/*Without a function, you cannot solve factorial problems for large numbers because:

You would need to manually write repetitive multiplications.

The logic is infinite for unknown inputs*/

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));  // 120
// console.log(factorial(10)); // 3628800

