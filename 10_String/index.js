//Note: in javascript string are immutable(you can't modify)

//string : string is a sequence of character used for  representing text
//declearing string double quotes ("") or single quotes(' ') or template litrals(``)
//string mthods: 
//length - returns the number of character in the string
//toUpperCase() - converts the string to uppercase
//toLowerCase()- convert the string to lowercase
//includes() - checks if the string contains a specific substring
//indexof() - returns the index of the first occurrence of a substring
//trim() - removes whitespace from both ends of the string
//substring(start,end) - Extracts a substring b/w two specified indices
//slice(start,end) - Extracts a specified substring negative indices
//replace(old,new) - Replaces a specified substring with another substring
//split(separator) - Splits the string into an array based on a seprator
//charAt(index) - Returns the sting at the specified index

// let str1 = "suman";
// let str2 = 'mohan';
// let str3 = `this is another string declaration`
// console.log(str1);
// console.log(str2);
// console.log(str3);


//find length  
// let str = "i developer";
// console.log(str.length);//length 11

//toUpperCase  //prove  string are immutable(you can't modify)
// let str = "suman";
// console.log("before uppercase method ",str);//suman
// console.log(str.toLocaleUpperCase());//it gives uppercase but not change the original string  //SUMAN
// console.log("after uppercase method ", str);//suman

// //toLowerCase()
// let str = "SUMAN";
// console.log(str.toLocaleLowerCase()); //suman


//includes
// let str = 'suman';
// console.log(str.includes('A')); //false


//indexOf
// let str = 'suman';
// console.log(str.indexOf('u'));
//note if value exist then show index no , in not exist then show -1 and if value repeat like (in samim then show first m)


//trim (The trim() method removes spaces from both ends of the string but does not remove spaces in between words.)
// let str = " mohan is ";
// console.log(str.length);//check length
// console.log(str.trim().length)


//subString()
// let str = 'best javascript mastery course on youtube';
// let substring = str.substring(5,15);
// console.log(substring);//javascript

//slice
// let str = 'best javascript mastery course on youtube';
// console.log(str.slice(5,17));//javascript m

//replace
// let str = 'best javascript mastery course on youtube';
// console.log(str.replace('best','BEST'));//BEST javascript mastery course on youtube

//split
// let str = 'best javascript mastery course on youtube';
// let result = str.split(" ");//(",")
// console.log(result);//[ 'best', 'javascript', 'mastery', 'course', 'on', 'youtube' ]

//charAt
let str = 'suman';
console.log(str.charAt(0)); //s //if character not exist then no show output