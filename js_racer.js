"use strict"

var total_player = process.argv[2]
var track = process.argv[3]
var playerWon

if (total_player < 2) {
  return console.log('Jumlah pemain minimal 2');
}

if (track < 15) {
  return console.log('Panjang lintasan minimal 15');
}

function dice(){
  var rollDice= Math.floor(Math.random() *6)+1
  return rollDice
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function print_board(players) {
  // console.log("........",players)
  reset_board()
  for (let i=0; i<players.length; i++){ // pemain yg sudah ada id si abc itu
    advanced_player(players[i])
    let line = print_line(players[i].name, players[i].position)
    console.log(line)
  }
  // console.log('\n-------\n')
} 

function generate_player(total_player) { // ambil dr parameter bnyaknya pemain
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let players = [];

  for (let i = 0; i < total_player; i++) {
      if (i<total_player){
        players.push({
        name: alphabet[i],
        position: 0
        })
      }
  }
    return players
}

function print_line(player, pos) {
  let line = [];

  for (let i = 0; i < track; i++) {
    if(i===pos){
      line.push(player)
    }
    else{
      line.push(" | ")
    }
  }
  return line.join("")
}

function advanced_player(player) {
  // console.log("===",player)
  // console.log('-----player', player.name, player.position, dice())
  let newPos = player.position + dice();

  if (newPos > track - 1) {
    newPos = track - 1;
  }
  
  player.position = newPos

  return player;
}

function race() {
  let finish = false;

  while (!finish) {
    let players = generate_player(total_player) // panggil si player dan posisi nya dr function generate
    // console.log("xxxx",players)
    for (let i = 0; i < players.length; i++) {
      players[i].position = advanced_player(players[i]);
      print_board(players); // panggil function print_board
      sleep(1500) // untuk delay
      finish = finished(players[i].position); // panggil function finished
      if (finish) {
        playerWon = players[i].name;
        break;
      }
    }
  }
}

function finished(position) {
  if (position > track) { // ini harusnya diisi posisi === track, tp krena a nya g tau dmna jd dibkin hlebi besar aja. klu dibuat === jd infinity loop
    return true;
  } else {
    return false;
  }
}
function winner() {
  console.log(`Player ${playerWon} is the winner`);
}
function reset_board() {
  console.log("\x1B[2J")
}

// print_board()
race()
winner()