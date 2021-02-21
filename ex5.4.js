// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


const toWeirdCase=(string)=> {
    let array = string.split(' ')
    let newArr = []
  
    for (let i = 0; i < array.length; i++) {
      let newString = "";
      for (let j = 0; j < array[i].length; j++) {
        if (j % 2 == 0) {
          newString += array[i].charAt(j).toUpperCase()
        } else {
          newString += array[i].charAt(j).toLowerCase()
        }
      }
      newArr.push(newString)
    }
    return newArr.join(' ')

  }
  
  console.log(toWeirdCase( "Weird string case" ))
  console.log(toWeirdCase( "String" ))