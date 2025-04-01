//an objeect in javascript is a collection of key-value pairs. the keys(properties) are strings (or symbols)and the values can be any data type like number, string, arrays, fucntions, etc
//person  //phone // car

// const person = {
//     name: "suman",
//     age: 30,
//     phone: "i phone-15",
//     income: "$239B"
// };

// console.log(person.name); //output : suman
// console.log(person.age) ; //output:30

// const car = {
//     name: "BMW",
//     color: "White",
//     price: "80L"
// };


//**************  opreator on object*******************
/*The spread operator (...) is used to expand elements from an array, object, or string. */
// const smartPhone = {
//     name: "i phone-15",
//     price: 75000,
//     camera: "5000 MAH",
//     ram: "4GB",
//     rom: "64GB"
// };
//type 1 to access value
// console.log(smartPhone.name,smartPhone.price,) //access value one by one


//type 2 access the value
// const {name,price,rom} = smartPhone;  //destructure the value from smartPhone variable
// console.log(name,price,rom);



// const smartPhone2 = { ...smartPhone ,name:'samsung s-23'}; //this is spread opreator in obj
// console.log(smartPhone2)




//merge two opreator
// let emp = { name: "John", age: 25 };
// let details = { city: "New York", country: "USA" };

// let fullDetails = { ...emp, ...details };
// console.log(fullDetails);
// { name: "John", age: 25, city: "New York", country: "USA" }


//spread in function arguments
// function add(a, b, c) {
//     return a + b + c;
// }

// let numbers = [1, 2, 3];
// console.log(add(...numbers)); // 6


//combining shopping carts
let cart1 = ["Shoes", "Watch"];
let cart2 = ["T-shirt", "Jeans"];

let finalCart = [...cart1, ...cart2];
console.log(finalCart); // ["Shoes", "Watch", "T-shirt", "Jeans"]
