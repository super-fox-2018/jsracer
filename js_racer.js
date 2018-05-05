"use strict"

function dice(){
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

function generatePlayers(player) {
    let namePlayer = 'abcdefghijklmnopqrstuvwxyz';
    let listPlayer = [];

    for(let i = 0; i < player; i++) {
        listPlayer.push(namePlayer[i]);
    }
    return listPlayer;
}

function print_board(num, long) {
    
}

function print_line(pos) {
    let track = [];
    
    for(let i = 0; i < pos; i++) {
        track.push(' ');
    }
   return track;
}

function advanced_player(player) {
//untuk maju

}

function finished() {

}

function winner() {
    return 'Player ' + 'A' + 'win';
}
function reset_board() {
  console.log("\x1B[2J")
}

// console.log(dice());
// while(!finished()){
//     let players = generatePlayers(3)
//     print_board(3,15)
// }
// console.log(print_board(3, 15));
// console.log(print_line(10))