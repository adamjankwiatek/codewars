// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    const flower1isEven = flower1 % 2 === 0
    const flower2isEven = flower2 % 2 === 0
    if(flower1isEven === true && flower2isEven === false){
        return true
    }else if(flower1isEven === false && flower2isEven === true){
        return true
    }else{
        return false
    }
}
