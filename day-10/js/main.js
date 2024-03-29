// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// function abbrevName(name){
//     const firstInitial = name[0][0]
//     const secondInitial = name.split(' ')[1][0]
//     return `${firstInitial}.${secondInitial}`
// }

const abbrevName = name => `${name[0][0].toUpperCase()}.${name.split(' ')[1][0].toUpperCase()}`



console.log(abbrevName('Adam Kwiatek'))