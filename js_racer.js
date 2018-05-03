"use strict"

var player = generate_player(3)
var track_length = 20
var theWinner;

function dice() {
  return Math.floor(Math.random() * 6)

}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function generate_player(player) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var obj = {}
  for (let i = 0; i < player; i++) {
    obj[alphabet[i]] = 0
  }
  return obj;
}

function print_line(player, pos) {
  var line = []
  for (let i = 0; i < track_length; i++) {
    if (i === pos) {
      line.push(player)
    } else {
      line.push(' ')
    }
  }
  return line.join('|');
}

function print_board() {
  reset_board()
  for (let key in player) {
    console.log(print_line(key, player[key]));
  }
  sleep(800)
}



function advanced_player(player) {
  let lastPosition = player + dice()
  if (lastPosition > track_length - 1) {
    lastPosition = track_length - 1
  }
  return lastPosition;
}

function finished(pos) {
  if (pos === track_length - 1) {
    return true;
  } else {
    return false;
  }
}

function play() {
  let status = false
  while (status === false) {
    for (let key in player) {
      player[key] = advanced_player(player[key])
      print_board()
      status = finished(player[key])
      if (status) {
        theWinner = key
        return theWinner;
      }
    }
  }
}

function winner(player) {
return `player ${player} win`;
}

function reset_board() {
  console.log("\x1B[2J")
}
// console.log(print_line());
// console.log(dice());
console.log(play());
console.log(print_board());
console.log(winner(theWinner));
