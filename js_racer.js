'use strict'

function dice() {
  return Math.ceil(Math.random() * 6);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function gameStart(numOfPlayer, length) {
  let pos = [];
  for (let i = 0; i < numOfPlayer; i++) {
    pos.push(0);
  }
  let winnerIndex = 0;
  let isFinished = false;
  let playerList = 'abcdefghij';
  while (isFinished !== true) {
    for (let i = 0; i < numOfPlayer; i++) {
      if (isFinished !== true) {
        resetBoard();
        printBoard(numOfPlayer, pos, length);
        pos[i] = advancedPlayer(pos[i]);
        isFinished = finished(pos[i], length);
        winnerIndex = i;
        sleep(400);
      }
    }
  }
  winner(playerList[winnerIndex]);
  return '';
}

function printBoard(numOfPlayer, pos, length) {
  let playerList = 'abcdefghij';
  for (let i = 0; i < numOfPlayer; i++) {
    let playerPos = pos[i];
    let playerName = playerList[i];
    console.log(printPlayer(playerName, playerPos, length));
  }
}

function printPlayer(playerName, pos, length) {
  let track = [];
  for (let i = 0; i < length; i++) {
    track.push([' ']);
  }
  track[pos] = playerName;
  return track.join('|');
}

function advancedPlayer(playerPosition) {
  let newPlayerPosition = playerPosition + dice();
  return newPlayerPosition;
}

function finished(pos, length) {
  if (pos > length - 2) {
    return true;
  } else {
    return false;
  }
}

function resetBoard() {
  console.log('\x1B[2J');
}

function winner(winnerName) {
  console.log(`${winnerName} WINS`);
}

let argv = process.argv;
let numOfPlayer = argv[2];
let length = argv[3];

console.log(gameStart(numOfPlayer, length));
