// function createBoard (numOfPlayers,boardLength){
//   const board =[]
//
//   // insert number of players here
//   let players = getPlayers()  // if 3 => [a,b,c]
//
//   for (let i = 0; i < players.length; i++) {
//     print_line(players[i], 0, board)
//     // let nestedArr = []
//     // for (let j = 0; j < boardLength+1; j++) {
//     //    nestedArr.push('')
//     // }
//     // board.push(nestedArr.join(" | "))
//     // console.log(arr)
//   }
//   console.log(board);
// }

function dice(){
  let roll = Math.ceil(Math.random()*5 +1);
  return roll
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function getPlayers ( numOfPlayers ) {
  let nameChoice = 'abcdefghijklmnopqrstuvwxyz';
  let counter = 0
  let outputPlayers = []
  for (let a = 0; a < numOfPlayers; a++) { //num = 3
    outputPlayers.push (nameChoice[a])
  }
  return outputPlayers
}

function create_line (boardLength) {
  let board = [];
  let players = getPlayers (3) //insert number of players
  let currentPosition = playerPosition (3)
  // let players = ['a','b','c']
  for (let i = 0; i < players.length; i++) {
    let line = [];
      for (let j = 0; j < boardLength; j++) {
      if(j == 0) {
        line.push(players[i])
      } else {
        line.push(' ');
      }
    }
    board.push(line.join('|'))
  }
  console.log(board)
}

// create_line(15)

function playerPosition (numOfPlayers) {
  let eachPosition = []
  for (let i = 0; i < numOfPlayers; i++) {
    eachPosition.push(0)
  }
  return eachPosition
}

// playerPosition();

function finished() {

}
function winner() {

}
function reset_board() {
  console.log("\x1B[2J")
}

//ddriver code
let playingBoard = createBoard(3,15)
