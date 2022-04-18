// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// function squareSum(nums){
//     return nums.map(x => Math.pow(x, 2)).reduce((acc, c) => acc + c, 0)
// }

// console.log(squareSum([1, 2, 2]))

const squareSum = nums => nums.map(n => n**2).reduce((acc, c) => acc + c, 0)