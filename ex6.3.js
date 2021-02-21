// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz

const combine=(string1,string2)=>{
    let array1=string1.split('')
    let array2=string2.split('')
    let array3=[]

    for(let i=0;i<array1.length;i++){
        if(array3.indexOf(array1[i]) == -1){
           array3.push(array1[i])
        }
      }
      for(let i=0;i<array2.length;i++){
        if(array3.indexOf(array2[i]) == -1){
           array3.push(array2[i])
        }
      }

    return array3.sort().join('')

    }
    
console.log(combine('xyaabbbccccdefww','xxxxyyyyabklmopq'))

