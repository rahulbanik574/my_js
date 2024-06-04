// Immediately Invoked Function Expression

(function chai()
{//named iife
    console.log(`DB CONNECTED`);
})();
//global scope ko polution k baje se problem hota hey ,,,etar theke bachar jonno amra iffi use  kori 
//(1)->function defination
//(2)->for execution
//to create private and public variables and methods.
//; must
//simple iife

(()=>{
    console.log(`hi`);
})()//arrow iife

((name)=>{
    console.log(`hi ${name}`);
})('rahul')//arrow iife



//IIFEs have limitations, such as not being able to be reused, or not being able to access variables and functions outside of their own scope. ...
//The syntax for creating an IIFE can be somewhat complex, especially for developers who are new to JavaScript, making it more difficult to read and understand.
// More items...•10 Feb 2023









// provides encapsulation, allowing you to create private scopes for variables and functions