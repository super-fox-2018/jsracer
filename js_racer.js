"use strict"

let argv = process.argv;
//console.log(argv);
// argv[2] -> jumlah player
// argv[3] -> panjang track

let playerCount = argv[2];
let trackLength = argv[3]
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let raceTrack = []; // track player steps

// generate players
for (let i = 0; i < playerCount; i++) {
  let player = [];

  for (let j = 0; j < trackLength; j++) {
    if (j === 0) {
      player.push(alphabet[i]);
    } else {
      player.push(" ");
    }
  }
  raceTrack.push(player);
}

// console.log(raceTrack);

function dice() {
  let min = 1;
  let max = 6;

  let dice = Math.floor(Math.random() * (max - min + 1) + min);
  return dice;
}

function sleep(milliseconds) {
  let start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function printBoard(players) {
  for (let i = 0; i < players.length; i++) {
    // advancedPlayer(players[i]);
    // sleep(500);
    printLine(players[i])
  }
  // resetBoard()
}

function printLine(player) {
  console.log(player.join('|'));
}

function advancedPlayer(player) {
  let steps = dice();

  let currentIndex = 0
  for (let i = 0; i < player.length; i++) {
    if (player[i] !== ' ') {
      currentIndex = i
      break;
    }
  }
  player[currentIndex + steps] = player[0];
  player[currentIndex] = ' ';

}

function finished() {
  // salah satu player, di index terakhir
  
  // winner()
}

function winner() {
  // character apa yg menang
}

function resetBoard() {
  console.log("\x1B[2J")
}


// - Input player 5
// - Generate players ['a', 'b', 'c', 'd', 'e']


printBoard(raceTrack);
for (let i = 0; i < raceTrack.length; i++) {
  advancedPlayer(raceTrack[i]);
  printBoard(raceTrack);
  sleep(500);
  resetBoard()
}
