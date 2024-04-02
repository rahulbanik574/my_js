const myobj ={
    js:"javascript",
    cpp:"c++"
}

for (const key in myobj)
{
    console.log(key)
}

const program = ["ra","hul"]
for(const key in program)
{
    console.log(key)
}

//in case of array for in loop gives ony index no ..but for of gives element 

//we can't use for in loop in map also-beacuse map-e iterate hoi na