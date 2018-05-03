"use strict"

function dice(){
  return Math.round(Math.random() * 6)
}
console.log(dice())
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

var player = {}
    player.a = 0;
    player.b = 0;

function print_board() {
        
        var disp = [];
        for(var play in player){
          disp.push(print_line(play, player[play]))
         }
         return disp.join('\n')
    
}


function print_line(player, pos) {  
  var namePlayer = player;
  var longTrack = 15;
  var track = [];
  for(let a=0; a <= longTrack; a++){
    track.push(' ')
  }
  track[pos] = namePlayer;
  return track.join('|');
}


function advanced_player(racer) {
  var champ = ''
  for(let a=0; a < racer.length; a++){
    player[racer[a]] = 0
  }
  var finisTime = 0
  while(finisTime < 15){
    reset_board()
    for(var position in player){
      if(player[position]<15){
        player[position] += dice();
        if(player[position]>15){
          player[position] = 15;
          finisTime = player[position]
          champ = position
          break;
        } 
      }else{
        player[position] = 15;
        finisTime = player[position]
        champ = position
        break;
      }
      
    }
    console.log(print_board());
    sleep(2000);
  }
  
  return 'The winner is  ' + champ;
}
console.log(advanced_player(['u', 'e', 'f']))

// function finished() {
  
// }
// function winner() {

// }
function reset_board() {
  console.log("\x1B[2J")
}


