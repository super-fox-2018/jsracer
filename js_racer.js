"use strict"

function dice(){
  var dice = Math.floor(Math.random() * 6 + 1);
  return dice;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function print_board(player, line) {
  var playerArr = advanced_player(player);
  var arr = [];
  var temp = "";
  var origin = 0;

  for(var i = 0; i < playerArr.length; i++){
    var lineArr = print_line(playerArr[i], 0, line);  //'a', 0, 15
    arr.push(lineArr);
  }

  var position = [0,0,0];
  var winner = [];
  var maxIdx = line - 1;
  do{
    for(var j = 0; j < player; j++){
      /* --------------------------------------
                      FUNCTION METHOD
      -----------------------------------------*/
      var move = dice();
      console.log("move: " + move)
      if((position[j] + move) >maxIdx){
        arr[j] = print_line(playerArr[j], maxIdx, line);
        winner.push(playerArr[j]);
      }
      else{
        arr[j] = print_line(playerArr[j], position[j] + move, line);
        position[j] += move;
      }
      /* --------------------------------------
                      SWAP METHOD
      -----------------------------------------*/
      /*var maxIdx = line -1;
      var rowIdx = arr[j];

      console.log("move: " + move);
      if((position[j] + move) > maxIdx){
        temp = rowIdx[position[j]];
        rowIdx[position[j]] = rowIdx[maxIdx];
        rowIdx[maxIdx] = temp;
        winner.push(temp);

      }
      else{
        temp = rowIdx[position[j]];
        rowIdx[position[j]] = rowIdx[position[j]+move];
        rowIdx[position[j] + move] = temp;
        position[j] += move;
      }*/

      for(let i=0; i<arr.length; i++) {
        console.log(arr[i].join('|'));
      }
    }
  reset_board();
 }while(finished(arr) !== true)


  console.log(winner[0].toString().toUpperCase() + " IS THE WINNER!");

}

function print_line(playerName, posPlayer, line) {  //'a', 0, 15
  var lineArr = [];

  if(line < 15){
    return "Invalid line length"
  }
  else{
    for(var k = 0; k < line; k++ ){
      if(k !== posPlayer){
        lineArr.push(" ");
      }
      else{
        lineArr.push(playerName);
      }
    }
    return lineArr;
  }

}

function advanced_player(player) {
  var str = "abcdefghijklmnopqrstuvxyz";
  var arr = str.split("");
  var playerArr = [];
  if(player < 2 && player > 25){
    return "Invalid player number"
  }
  else{
    for(var i = 0; i < player;i++){
      playerArr[i] = str[i];
    }
    return playerArr;
  }

}

function finished(arr) {
  var maxIdx = arr[0].length - 1 ;
  for(var i = 0; i < arr.length; i++){
    if(arr[i][maxIdx] !== " "){
      return true;
    }
  }

  return false;

}
function winner(player) {

}
function reset_board() {
  console.log("\x1B[2J")
}


let argv = process.argv
let player = argv[2];
let line = argv[3];

console.log(print_board(player, line));
