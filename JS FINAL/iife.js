// Immediately Invoked Function Expression

(function chai()
{//named iife
    console.log(`DB CONNECTED`);
})();
//(1)->function defination
//(2)->for execution
//to create private and public variables and methods.
//; must


(()=>{//simple iife
    console.log(`hi`);
})()//arrow iife

((name)=>{
    console.log(`hi ${name}`);
})('rahul')//arrow iife