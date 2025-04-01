// ****************Function  scope**************

//global scope 

// let globalVar = 10;
// // console.log(globalVar);

// let display=()=>{
//     console.log("inside the display function")
//     console.log(globalVar)
// }

// display();




// let display=()=>{
//     let globalVar = 10;
//     console.log("inside the display function")
//     console.log(globalVar)
// }

// display();
// console.log(globalVar); //this is error beacuse glovalVar in inside the block



//*********block scope********** */
if(true){
    let blockVar = 10;
    console.log(blockVar)
}

// console.log(blockVar) //this is error
