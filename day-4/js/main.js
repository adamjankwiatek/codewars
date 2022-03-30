// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = int => {
    let str = ''
    for(let i = 1; i <= int; i++){
        str += `${i} sheep...`
    }
    return str
}

countSheep(5)