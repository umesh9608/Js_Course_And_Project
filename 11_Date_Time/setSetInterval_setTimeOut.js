//setinterval() is used to excute a function repeatedly after a given interval of the time (in milliseconsd)

// let intervalId = setInterval(function (){
//     console.log("This runs every 2 seconds");
// },2000); //repeat every 2000ms(2 sec)


// //clearinterval() stopping setinterval():use clearinterval (intervalld) to stop the inerval
// clearInterval(intervalId);  //stops the repeated execution


//setTimeout() is used to execute a function after a specified delay(in milliseconds), but it only runs once
setTimeout(function () {
    console.log("This runs once after 3 seconds");
},3000) //Ececuted after 3000ms (3sec)