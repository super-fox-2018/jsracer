const players = ['a', 'b', 'c'];
const trackSize = 10;
const playerPos = [0, 0, 0];

function dice () {
  const max = 6;
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function printLine (player, pos) {
  const line = [];
  for (let i = 0; i < trackSize; i++) {
    if (pos === i) {
      line.push(player);
    } else {
      line.push(' ');
    }
  }
  console.log(line.join('|'));
}

function printBoard (player) {
  const charIndex = players.indexOf(player);
  printLine(player, playerPos[charIndex]);
}

function advancedPlayer (player) {
  const charIndex = players.indexOf(player);
  playerPos[charIndex] += dice();
}

function finished () {
  
}

while (!finished()) {
  for (let i = 0; i < players.length; i++) {
    advancedPlayer(players[i]);
    printBoard(players[i]);
    // sleep(500);
    // resetBoard();
  }

}




