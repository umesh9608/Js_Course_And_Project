// console.assert("We are learning promises right now");

//promises => shyaam ne request kiya
//fulfilled =>ram ne 100 de diya => resolve => .then
//rejected  =>ram ne 100 nhi diya => reject => .catch

let promises = new Promise((resolve, reject) => { 
    let num = '10'; // string
    if(num === 10){
        resolve('num is a number'); // fulfilled
    }else{
        reject('num is not a number'); // rejected
    }
})


promises.then((message) => {
    console.log(message); // fulfilled
}).catch((message) => {
    console.log(message); // rejected
})