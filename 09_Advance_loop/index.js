/* notes:
        ✔️ Use for...of for arrays, strings, sets, and maps.
        ✔️ Use for...in for objects to loop through their keys. 🚀*/

// *************for...in ****************
//for..in loop ka use only key ya phir key value dono print krna ho to wha use krte hai
/* When to Use for...in?
 Iterating over object properties
 Checking key-value pairs
 Counting occurrences in strings
 Avoid using it for arrays (use for...of instead). */


// const phone = {
//     brand:"iphone",
//     model:"iphone-16",
//     price:7500,
//     camera:'2GB',
//     rom:'16GB'
// }
// how you print only key not value like :  brand,model,price,camera,ram,rom
// for(let key in phone){    //here only for and in is keyword and key(change) ,phone is a variable
// console.log(key)
// }

//if you want key and value then
// for(let key in phone){
//     console.log(key,phone[key])
// }



//********for..of ************** */
//itreate over the vlaues of iterable objects like array,string,Maps,etc
/* When to Use for...of?
✔️ Iterating through arrays, strings, sets, maps
✔️ Looping through values instead of keys
✔️ Works better for iterables than for...in

❌ Does NOT work on plain objects (use for...in for that). */

// let arr = [1,2,3,4,5];
// for(let value of arr){
//     console.log(value)
// }


//********forEach()************ */
//Ececutes a function once for each element in a array(cannot be used to break the loop)

//basic example of forEach
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2); // Doubles each number
});



//using array
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
    console.log(`${index + 1}: ${fruit}`);
});


let arr = [10,20,30];
arr.forEach((value,index)=>{
    console.log(value,index,arr);
});  
