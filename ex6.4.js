// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

const isIsogram=(string)=>{

    let counts = {},
    duplicate = 0;
    let array = string.split('');
    array.forEach((x)=> {
    counts[x] = (counts[x] || 0) + 1; //set - collection of unique items. it returns the value of counts[x] if it is set. otherwise 0 
  });

  for (let key in counts) { // loop through each key/value
    if (counts.hasOwnProperty(key)) {
      counts[key] > 1 ? duplicate++ : duplicate;
    }
  }
return duplicate>0 ? 'false':'true'
}

console.log(isIsogram("aba"))
console.log(isIsogram("Dermatoglyphics"))