// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
// string for false.


const  IsString =(string)=>{
    if(typeof string ==='string'){
        console.log('Yes')
    }
    else{
        console.log('No') 
    }
}
IsString('Hello')
IsString(3)

//same same but different

const  IsString =(string)=>{
    return typeof string ==='string'?'Yes':'No'
}
console.log(IsString('Hello'))
console.log(IsString(3))
