// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455

const sumLowestPossitive=(array)=>{
    let sum=0
    array=array.sort((a,b)=>{return a-b})
    // return array
    sum+=array[0]+array[1]
    return sum;
    
}

console.log (sumLowestPossitive([19, 5, 42, 2, 77]))
console.log (sumLowestPossitive([10, 343445353, 3453445, 3453545353453]))



