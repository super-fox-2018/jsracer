"use strict"

function dice(){
var numb = Math.floor(Math.random() * 6)
return numb
}
// console.log(dice())
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
function generatePlayers(num){
  var abjad='abcdefghijklmnopqrstuvwxyz'
  let players = []
  for(let i=0; i<num;i++){
    var huruf = abjad.charAt(Math.floor(Math.random() * abjad.length));
      players.push({
      name: huruf,
      position: 0
    })
  }
  return players
}
// console.log(generatePlayers(3))

function print_board(count) {
  let position =0
  let players = generatePlayers(count)
  
  while ( !finished(players) ){
    reset_board();
  for(let i=0;i< players.length;i++){
    let player = players[i]
    if(!finished(players)){
      advanced_player(player)
    }
    
    console.log(print_line(player.name, player.position))
  }
  

  sleep(500);
}
}

function print_line(playerName, playerPosition) {
  
  var panjang =[];
  for(let i=0;i<=15;i++){
    panjang.push(' ')  
  }
  panjang[playerPosition]=playerName
  return panjang.join(' | ')
}


function advanced_player(player) {
    
  var newPosition =  player.position + dice()
  if(newPosition >= 14){
    newPosition = 14
  }
  player.position = newPosition
}

function finished(players) {
let lintasan = print_line(players)
var match = false
  for(let i=0;i<players.length;i++){
    if(players[i].position >= 14){
      match =true
    }
    
  }
  return match
}
function winner() {

}
function reset_board() {
  console.log("\x1B[2J")
}

var acak=dice()
var line=print_line(acak)
print_board(3) 






