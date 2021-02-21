// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

const convertToInitial=(string)=>{
    let array=string.split(' ');
    console.log(array)
    const inisials= array[0].charAt(0)+ '.' +array[1].charAt(0)
return inisials.toUpperCase()
}

console.log(convertToInitial( "sam harris" ))
console.log(convertToInitial( "Patrick Feeney" ))