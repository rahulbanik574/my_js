// const user={
//     username:"rahul",
//     price:333,

//     welcomeMessage:function()
//     {
//         console.log(`${this.username},hi`);
//         console.log(this)

//     }
// }
// user.welcomeMessage()
// user.username="sonai"
// user.welcomeMessage()
// console.log(this)




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
     

