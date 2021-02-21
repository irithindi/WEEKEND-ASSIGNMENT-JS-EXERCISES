// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// const accum=(string)=>{
//     let arr=string.split("")
//     console.log(arr)
//     let m=1;
//     for(i=0,m=1;i<arr.length; i++,m++){
//        let  newArr= arr[i].repeat(m);
//        m=+m;
//         return newArr
//     }

// }

// console.log(accum("abcd"))

// const accum=(string)=>{
//         for(i=0;i<string.length; i++){
//            string[i].repeat(2)
//             return string
//         }
//     }

//     console.log(accum("abcd"))


const accum = (string) => {
    let array = string.split('')
    let newArray = []
    // console.log(array)
    for (let i = 0, count = 1; i < array.length; i++, count++) {
        newArray.push(array[i].repeat(count))
        // console.log(newArray)
        for (let j = 0; j < newArray.length; j++) {
            newArray[j]= newArray[j].charAt(0).toUpperCase()+newArray[j].slice(1).toLowerCase()
    }
}
    let sent = newArray.join('-')
    return sent
}

console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))
