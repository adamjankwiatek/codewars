// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(str){
    // turn all digits into a new array
    const digits = str.split('')
    // make a new array, iterate through old array, and turn into string
    const binaryArr = digits.map(n => n < 5 ? 0 : 1).join('')
    return binaryArr
}