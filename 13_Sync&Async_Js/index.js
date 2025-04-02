//sync&Async js: syncronous & Asynchronous are two different ways that javascript executes code, especially in a web environment where you deal with user intercactions, network requests, and more
/*synchronous definition: in synchronous execution, code runs line by line, and each line must finish ececuting before the next one starts. This can lead to delays if a task takes a long time (eg; fetching data) 

asynchronous defination: in asynchronous exectuion, certain operations can be initiated and will run in the background, allowing the rest of the code to continue executing without waiting for the task to finsh 
  characteristics:Non-blocking code can run while waiting for an operaion (like a network reques) to complete*/

/* **************************Synchronous (Blocking) Example*******************
👉 All three friends walk together in a line, step by step.

If Ram stops to tie his shoelaces, Shyam and Ghanshyam also stop and wait.

They cannot move forward until Ram is done.

This means they reach school together but with delays if someone stops.

➡ This is like synchronous execution in programming, where tasks run one after another and each task must complete before the next one starts.



****************Asynchronous (Non-Blocking) Example****************
👉 Each friend takes their own route but aims to reach school at the same time.

Ram might take a shortcut, Shyam might take a normal road, and Ghanshyam might stop for snacks.

Even if one stops, the others keep going without waiting.

They may or may not reach school at the same time, but they don’t block each other.

➡ This is like asynchronous execution in programming, where tasks run independently and don't block each other.*/

//sync (runs one by one parallel)
//   console.log("line 1");
//   console.log("line 2");
//   console.log("line 3");
//   console.log("line 4");


//async (setTimeout(), fetch())
console.log("ram"); //show first
setTimeout(() => {
    console.log('shyam'); //show third (because wait 2 sec)
}, 2000)

console.log('ghanshyam') //show second