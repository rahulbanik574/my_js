// const user={
//     username:"rahul",
//     price:333,

//     welcomeMessage:function()
//     {
//         console.log(`${this.username},hi`);//...this represent's current context 
//         console.log(this)//it prints the full function context

//     }
// }
// user.welcomeMessage()//hitesh, hi
// user.username="sonai"
// user.welcomeMessage()sonai ,hi
// console.log(this)//it prints window object 










// const abc= function()
// {
//     let username ="rahul"
//     console.log(this.username);
// }
// abc()//undefined



// const abc= ()=>
// {
//     let username ="rahul"
//     console.log(this.username);
// }
// abc()//undefined

//explicit return
// const sum= (num1,num2) => {
//     return num1+num2
// }
// console.log(sum(2,1))//3

// const sum= (num1,num2) =>  num1+num2 //called implicit return
// console.log(sum(2,1))//3

// const sum= (num1,num2) => ( num1+num2) //called implicit return
// console.log(sum(2,1))//3.

//object return process
const sum= (num1,num2) => ({username: "ra"}) 


console.log(sum(2,3))//ra
     

