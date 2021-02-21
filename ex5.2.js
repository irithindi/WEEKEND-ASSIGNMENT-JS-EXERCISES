// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"



const repeatStr=(number,string)=>{
    let i=0;
    let newStr="";
    while(i<number){
         newStr+=string
        i++;
        
    }
    return newStr
}

console.log(repeatStr(6, "I"))
console.log(repeatStr(5, "Hello"))