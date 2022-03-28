// Let's play! You have to return which player won! In case of a draw return Draw!.
// rps('scissors','paper') // Player 1 won!

function rps(player1, player2){
    player1 = player1.toLowerCase()
    player2 = player2.toLowerCase()
    const r = 'rock'
    const p = 'paper'
    const s = 'scissors'
    //player 1 win condtions
    if(player1 === r && player2 === s || player1 === s && player2 === p || player1 === p && player2 === r){
        return 'Player 1 won!'
    }else if(player1 === player2){
        return 'Draw!'
    }else{
        return 'Player 2 won!'
    }
}