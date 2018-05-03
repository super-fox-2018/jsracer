"use strict"

function generatePlayers() {
  const players = [];
  let char = 97;
  for (let i = 0; i < totalPlayers; i += 1) {
    players.push({
      char: String.fromCharCode(char),
      pos: 0 
    });
    char += 1;
  }

  return players;
}

function dice(){
  return Math.ceil(Math.random()*6);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  while(true) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function print_board(players, trackLength) {
  for (let i = 0; i < players.length; i += 1) {
    let player = players[i];
    print_line(player.char, player.pos, trackLength);
  }
}

function print_line(player, pos, trackLength) {
  const track = [];
  for (let i = 0; i <= trackLength; i += 1) {
    if (i === pos) track.push(player);
    else track.push(' ');
  }
  console.log(track.join('|'));
}

function advanced_player(player) {
  const num = dice();
  if ((player.pos + num) < trackLength) player.pos += num;
  else player.pos = trackLength - 1;
}

function finished(player) {
  return player.pos === trackLength - 1;
}

function winner(player) {
  return `Player ${player.char} wins!`;
}

function reset_board() {
  process.stdout.write('\x1Bc'); 
}

const totalPlayers = +process.argv[2];
const trackLength = +process.argv[3];
const players = generatePlayers(totalPlayers);

if (!totalPlayers || !trackLength) {
  console.log('Please input the parameters');
  return;
} else if (totalPlayers > 26) {
  console.log('Cannot add more than 26 players');
  return;
}

function startGame() {
  let idx = -1;
  do {
    reset_board();
    print_board(players, trackLength);
    idx += 1;
    if (idx === players.length) idx = 0;  
    advanced_player(players[idx]);
    sleep(500);
  } while (!finished(players[idx]));
  reset_board();
  print_board(players, trackLength);
  console.log(winner(players[idx]));
}

startGame();