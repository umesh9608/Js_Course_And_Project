//***************Operators***********/

//Arithmetic Op 

// let a = 10;
// let b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//Assignment Op  (= , +=, -=, *=, %=, **=)

// let x = 10;
// let sum = 20;
// // sum = sum + x; //30
// sum += x; //30
// sum *= x; //300
// console.log(sum);

//Comparison Op  (==, !=, ===, !==, > , >=, < , <=)
// double equal to (==) only compare the value
//Tripple equal to (===) compare value and data type
//not equal to (!=)
//not equal and type (!==)
//note: == & === are not same

// let x = 10;
// let y = '10'
// console.log(x == y ); //ans show (true) because it compare only valye not data type
// console.log(x === y);//ans show false because it check value and data type is true then true either false
// console.log(x != y); //false


//Logical Op (&&, ||, !)


//Ternary Op  ( () ? ():()  )
//first is condition ? second is  true output : and third is false output
// let marks = 40;
// let result = (marks > 40) ? ("you pass") : ("you failed");
// console.log(result);


//Template literal [back tick (``)]
let Name = 'umesh';
let income = 22223;
let pincode = 834001;

//your name is = umesh your income is = 22223 and pincode is  834001

// console.log("your name is = " + Name + " and your income is = " + income + " and your pin code is = " +pincode)

console.log(`your name is = ${Name} and your income is = ${income} and pincode is ${pincode}`);