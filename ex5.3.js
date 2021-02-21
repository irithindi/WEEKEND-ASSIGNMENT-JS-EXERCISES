// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"



const toCamelCase=(string)=>{
    let arr = string.split(/[_-]/);
    let newStr="";
    for (let i = 1; i < arr.length; i++) {
        newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr[0] + newStr;
}
console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))


