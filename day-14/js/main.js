// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(str){
    let strArr = str.split(' ').sort((a, b) => a.length - b.length)
    return strArr[0].length
}