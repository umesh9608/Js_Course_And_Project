//****************array method******************

//.1 push():    add one or more element to the end of the array
//.2 pop():     remove the last element from the array and returen that element
//.3 shift():   remove the first element from the array and return it
//.4 unshift(): add one or more elements to the beginning of the array
//.5 length():  returns the number of element in the array
//.6 find():    returns the first element that satisfies the provided testing function
//.7 includes(): Determine wheather an array contains a certain values
//.8 concat():   Merge tow or more arrays and returns a new array
//.9 join():     joins all array elements into a string, with an optional separator
//.10 splice():  Adds or remove elements from the array
//.11 slice():   return a shallow copy of a portion of array
//.12 short():   shorts the element of the array(alphabetical by default, can be customized)
//.13 findindex(): Return the index of the first element that satisfies a test
//.14 form():   Create an array from an array-like or itreable object
//.15 isArray(): Checks if the given value is an array 

// let arr =[20,29,38,50];
//push
// arr.push(100); //[ 20, 29, 38, 50, 100 ]

//pop 
// arr.pop(); //[ 20, 29, 38 ]

//shift
// arr.shift() //[ 29, 38, 50 ]

//unshift
// arr.unshift(5); //[ 5, 29, 38, 50 ]

// console.log(arr.length); //4

//find()
// let arr =[20,29,38,50];
// let found = arr.find((el)=>el > 38); //50 
// console.log(found); 

//includes()
// let arr = [1,2,3,4,5];
// console.log(arr.includes(2)); //true

//concat()
// let arr1 =[1,2,3];
// let arr2 =[4,5];
// let Merge = arr1.concat(arr2);
// console.log(Merge); //[ 1, 2, 3, 4, 5 ]

//join() it use when convert array into string

// let arr =["apple","mango","cherry"];
// let joined = arr.join(", ");
// console.log(joined);

//splices()
// let arr = [1, 2, 3, 4];
// arr.splice(2, 1, "a"); //first(2) is index,second(1)kitne element dalna hai and third is ("a") kya new dalna hia
// console.log(arr) //[ 1, 2, 'a', 4 ]


//slice()
// let arr = [1,2,3,4,5];
// let slided = arr.slice(1,3)//index 1 to index 3
// console.log(slided); //2,3

//short()
// let arr =[3,1,4,2]
// arr.sort((a,b)=>a-b);
// console.log(arr); //[ 1, 2, 3, 4 ]


//findindex()
// let arr =[5,12,8];
// let index = arr.findIndex((el)=>el > 10);//es value se 10 se bda value kis index me h
// console.log(index); //1

//form()
// let str = "hello";
// let arr = Array.from(str);
// console.log(arr) //[ 'h', 'e', 'l', 'l', 'o' ]

console.log(Array.isArray([1,2,3]));//true
console.log(Array.isArray("hello"))//false