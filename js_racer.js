"use strict"

const arg = process.argv

function dice(){
  return parseInt(Math.random()*5+1)
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function print_board(gameBoard,boardLength){
  for(var n = 1; n < boardLength; n++){
    console.log(gameBoard[n].join(' | '))
  }
}

function generateboard(boardLength) {
  var boardGenerated = []
  for(var i = 0; i < boardLength; i++){
    boardGenerated.push(' ')
  }
  return boardGenerated
}

function gameSetup(player, pos) {
  console.log('\n\n\n')
  var playerName = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var gameBoard = [[]]
  for(var i = 0; i < player; i++){
    gameBoard[0].push(pos)
  }
  for(var i = 1; i <= player; i++){
    var playerInGame = playerName[parseInt(Math.random()*playerName.length-1)]
    for(var j = 1; j < gameBoard.length; j++){
      playerInGame = gameBoard[j][pos] == playerInGame ? playerName[parseInt(Math.random()*playerName.length-1)] : playerInGame
    }
    gameBoard[i] = []
    gameBoard[i][pos]=playerInGame
    gameBoard[i].push(...generateboard(arg[2]))
    console.log(gameBoard[i].join(' | '))
  }
  console.log('\n\n\n')
  return gameBoard
}

function playing(gameBoard){
  var playing = true
  var positions = gameBoard[0]
  while(playing){
    for(var i = 1; i < gameBoard.length; i++){
      //player 1 akan jalan
      //jalan random dari 1 - 6
      // setiap kali jalan positions dari player 1 akan di update
      // setelah itu akan berlanjut ke player selanjutnya
      // ketika pemenang ditemukan game akan berakhir
      sleep(1000)
      var move = dice()
      if(positions[i-1] + move >= arg[2]-1){
        if(positions[i-1] + move > arg[2]-1){
          var temp = gameBoard[i][positions[i-1]]
          gameBoard[i][positions[i-1]] = ' '
          positions[i-1] = arg[2]-1
          gameBoard[i][positions[i-1]] = temp
        }else{
          var temp = gameBoard[i][positions[i-1]]
          gameBoard[i][positions[i-1]] = ' '
          positions[i-1] += move
          gameBoard[i][positions[i-1]] = temp
        }
        print_board(gameBoard,gameBoard.length)
        finished(gameBoard[i][positions[i-1]])
        playing = false
        break;
      }
      var temp = gameBoard[i][positions[i-1]]
      gameBoard[i][positions[i-1]] = ' '
      positions[i-1] += move
      gameBoard[i][positions[i-1]] = temp
      print_board(gameBoard,gameBoard.length)
      console.log('\n\n\n')
    }
  }
}

function finished(winner) {
  console.log(`${winner} wins!`)
}

function reset_board() {
  console.log("\x1B[2J")
}
playing(gameSetup(arg[3],0))