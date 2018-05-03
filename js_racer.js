// BUAT PLAYER
function generatePlayer(player) {
  var huruf = 'abcdefghijklmnopqrstuvwxyz'
  var players = []
  for (let i = 0; i < player; i++) {
    players.push(huruf[i])
  }
  return players;
}


function reset_board() {
  console.log("\x1B[2J")
}

//
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}


function generatePosition(player) {
  var position = []
  for (let i = 0; i < player; i++) {
    position.push(0)

  }
  return position

}


//DICE
function dice() {
  var random = Math.floor((Math.random() * 6) + 1);
  return random
}


//MAKING JUST 1 LINE
function print_line(playerName, pos, length) {
  var track = []

  for (let j = 0; j < length; j++) {
    track.push(' ')
  }
  track[pos] = (playerName)
  return track.join(' | ')

}


// FUNCTION PRINTBOARD
function print_board(length, sumPlayer) {

  var playerlist = generatePlayer(sumPlayer)
  for (let i = 0; i < playerlist.length; i++) {
    console.log(print_line(playerlist[i], 0, length))

  }
  sleep(3000);
}



function play(length, sumPlayer, playerlist, position) {
  let finish = false;
  if (length < 15) {
    return 'length of track is less than 15'
  }

  while (finish === false) {

    reset_board()


    for (let i = 0; i < playerlist.length; i++) {


      let current_pos = position[i]
      let move = dice()
      let new_pos = current_pos + move
      position[i] = new_pos
      //console.log(position[i] + ' pos®ition')
      //i -> 0
      // 1. roll dice - >
      // 2. dapetin posisi sblm nya - > 0
      // 3. maju ke new position - > posisi sblmnya + dice(no 1 + no 2)

      if (position[i] < length) {
        console.log(print_line(playerlist[i], position[i], length));
      }
      if (position[i] > length - 1) {
        position[i] = length - 1
        console.log(print_line(playerlist[i], position[i], length));
      }
      if (position[i] === length - 1) {
        var winner = (playerlist[i] + ' WIN')
        finish = true;
      }

    }
    sleep(3000);
  }
  console.log(winner)
}






//initialzation
print_board(18, 3)
//predefined player and pos
var playerlist = generatePlayer(3) //[a,b,c]
var position = generatePosition(3) //[0,0,0]

//core function call
play(18, 3, playerlist, position)
console.log('-----');
