//1  map():Create and return new array by applying a function to each element of the original arrat
//2  filter(): Create and return a new array with elements that pass a specified test condition
//3  reduce(): Reduce an array to a single value by applying a function to each element









//map()
// let arr = [1,2,3];
// let double = arr.map((el)=> el * 2);
// console.log(double) //[2,4,6]

//filter()
// let arr = [1,2,3,4];
// let evens = arr.filter((el)=> el % 2 === 0);
// console.log(evens); // [2,4]

//reduce()
// let arr = [1,2,3,4];
// let sum = arr.reduce((acc,el)=> acc + el, 0);
// //prev el => prev+el
// // o    1  => 1
// // 1    2  => 3
// // 3    3  => 6
// // 6    4  => 10
// console.log(sum); //10