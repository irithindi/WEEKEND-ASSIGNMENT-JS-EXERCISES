// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const summation=(num)=>{
    let sum=num;
    while (num>0){
        num=num-1;
        sum+=num;
    }
    console.log(sum)

}

summation(5);
summation(2);
summation(8);