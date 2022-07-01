// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = str => str.split('').filter(letter => letter !== '!').join('')

console.log(removeExclamationMarks('Adad!!!a'))