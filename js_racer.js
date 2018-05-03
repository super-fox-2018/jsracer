"use strict"
function dice() {
  return Math.round(Math.random() * 6);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function runJSracer(player, trackLength) {
  if (trackLength < 15) {
    console.log ("lintasan minimum 15");
    return 0;
  }
  let arrPlayer = generatePlayer(player);
  // console.log(arrPlayer);
  let pos = 0;
  let isFinished = false;
  let winPlayer = '';
  let counter = 0;
  let isWinner = true;
  while (isFinished === false) {
    reset_board();
    for (let i = 0; i < player; i++) {
      //putar dadu
      if (counter === 0) {
        arrPlayer[i].position = 0;
      } else {
        if (!isFinished) {
          arrPlayer[i].position = arrPlayer[i].position + dice();
        }
      }
      if (arrPlayer[i].position >= trackLength - 1) {
        arrPlayer[i].position = trackLength - 1;
        isFinished = true;
        // winPlayer = arrPlayer[i];
        if (isWinner) {
          arrPlayer[i].isWinner = true;
          isWinner = false;
        }
      }
      print_line(arrPlayer[i].name, arrPlayer[i].position, trackLength);
    }
    counter++;
    sleep(100000);
  }
  winner(arrPlayer);
}

function generatePlayer(player) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let arrPlayer = [];
  for (let i = 0; i < player; i++) {
    let objPlayer = {};
    for (let j = 0; j < player; j++) {
      objPlayer.name = alphabet[i];
      objPlayer.position = 0;
      objPlayer.isWinner = false;
    }
    arrPlayer.push(objPlayer);
  }
  return arrPlayer;
}

function print_board(player, lintasan) {
  if (lintasan < 15) {
    return "lintasan minimum 15";
  }
  // const alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,x];
  let arrLintasan = [];
  for (let j = 0; j < player; j++) {
    for (let i = 0; i < lintasan; i++) {
      arrLintasan.push(' ');
    }

  }

  return arrLintasan;
}

function print_line(player, pos, trackLength) {
  //untuk setiap player print player dgn posisi;
  let arrTrack = [];
  for (let i = 0; i < trackLength; i++) {
    arrTrack.push(' ');
  }
  arrTrack[pos] = player;
  console.log(arrTrack.join('|') + '|');
}

function advanced_player(player) {

}

// function finished() {
//   return true;
// }
function winner(player) {
  for (let i = 0; i < player.length; i++) {
    if (player[i].isWinner) {
      console.log("The Winner is : " + player[i].name + " Horeeeee!!!");
      break;
    }
  }
}
function reset_board() {
  console.log("\x1B[2J")
}

// runJSracer(3, 30);
// console.log(generatePlayer(3));
// console.log (dice())
// console.log (dice())
// console.log (dice())

let totalPlayer = process.argv[2];
let totalTrack  = process.argv[3];
// console.log(process.argv[2]);
// console.log(process.argv[3]);
runJSracer(totalPlayer, totalTrack);