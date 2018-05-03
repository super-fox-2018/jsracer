// let argv = process.argv;
// playerSize = argv[2];
// trackSize = argv[3];

const players = ['a', 'b', 'c'];
const trackSize = 10;
const playerPos = [0, 0, 0];

function sleep(milliseconds) {
  let start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function dice () {
  const max = 6;
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function printLine (player, pos) {
  const line = [];
  for (let i = 0; i <= trackSize; i++) {
    if (pos === i) {
      line.push(player);
    } else {
      line.push(' ');
    }
  }
  console.log(line.join('|'));
}

function printBoard () {
  console.log(playerPos);
  for (let i = 0; i < players.length; i++) {
    printLine(players[i], playerPos[i]);
  }
}

function advancedPlayer (player) {
  const charIndex = players.indexOf(player);
  const diceRoll = dice();
  if ((playerPos[charIndex] + diceRoll) > trackSize) {
    playerPos[charIndex] = trackSize;
    return true;
  } else {
    playerPos[charIndex] += diceRoll;
    return false;
  }
}

function finished () {
  return playerPos.indexOf(trackSize) !== -1
}

function winner () {
  const winnerIndex = playerPos.indexOf(trackSize);
  console.log('Your winner: ', players[winnerIndex]);
}

function resetBoard() {
  console.log("\x1B[2J")
}

let done = false;

while (!done) {
  for (let i = 0; i < players.length; i++) {
    advancedPlayer(players[i]);
    printBoard();
    done = finished();
    if (done) {
      winner();
      break;
    }
    sleep(500);
  }
}




