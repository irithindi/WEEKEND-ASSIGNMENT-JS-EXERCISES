// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters

const removesChar=(string)=>{
   let newString= string.slice (1,-1)
return newString
}

console.log(removesChar('change the world'))