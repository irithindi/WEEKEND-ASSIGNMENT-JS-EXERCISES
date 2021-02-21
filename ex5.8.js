// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

const lengthShortWord=(string)=>{

    let array= string.split(' ');
    let length=array[0].length;
    for(i=1;i<array.length;i++){
    if(array[i].length>length)
    length=array[i].length
    }
return length
}

console.log(lengthShortWord('The shortest word is'))