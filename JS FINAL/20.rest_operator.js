function calculateCartprice(...num1)
{
    return num1;
}
console.log(calculateCartprice(1,2,3,4,5,6));





function calculateCartprice(val1,val2,...num1)
{
    return num1;
}
console.log(calculateCartprice(1,2,3,4,5,6));



const user = {
    username:"Rahul",
    title: "banik"
}

function handleObject(anyobject){
    console.log(`full name is ${anyobject.username} ${anyobject.title}`)
}
handleObject(user)