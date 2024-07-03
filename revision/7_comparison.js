console.log(2>3);//true

console.log("2">1)//true "2" converted to number 
console.log("02">1)//true "02" converted to number 

//sometimes different datatype comparison does not give appropiate ans

// like 
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true
//here null converted to a number treating it is a zero.

console.log(undefined>0)//false
console.log(undefined==0)//false
console.log(undefined>=0)//false


/*
we should use === for comparison . it used to compare both datatype and value both 
*/ 
console.log("2" === 2)//falsek