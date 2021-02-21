// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

 countDuplicates=(string)=> {

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
  
    return duplicate;
  
  }
 
  console.log(countDuplicates("aabbcde"))
