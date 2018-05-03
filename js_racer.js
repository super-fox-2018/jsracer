"use strict"
/*
prelim= definisikan trackLength dan jumlah player sebagai global variable
1.buat function print_line untuk print setiap track dari perserta 
	-Buat loop untuk nentuin posisi perserta
2.buat function advance_player untuk membuat array of object yg isinya nama & posisi peserta
	-jumlah peserta sesuai dengan param yg diterima	

3.buat function print_board
	-buat pengulangan menggunakan while dng batas sampai winnerStatus=true
	-buat looping untuk melakukan print_line
		-->terdapat 2 kondisi yaitu first turn dan else
*/


function dice(){
	return Math.ceil(Math.random()*6) 
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function print_line(player, pos) {
	var arr=[]
	for(let i=0;i<trackLength;i++) {
		if(pos==i) {
			arr.push(player)	
		}else {
			arr.push("|")	
		}
	}
	return arr.join(" ")
}

function advanced_player(playerCount) {
	var player="abcdef"
	var arr=[]
	for(let i=0;i<playerCount;i++) {
		var obj={}
		obj.name=player[i]
		obj.pos=0
		arr.push(obj)
	}
	return arr
}

function print_board() {
	var firstTurn  = true
	var winner = ''
	var winnerStatus=false


	while(winnerStatus == false){
		for(var i=0;i<player.length;i++) {
			
			if (firstTurn == true) {
				console.log(print_line(player[i].name,player[i].pos))
					
			}else {
				if (winnerStatus==false) {
					player[i].pos+=dice()
					if(player[i].pos>= trackLength-1) {
						player[i].pos = trackLength-1
						winner=player[i].name
						winnerStatus=true
					}
				}
				console.log(print_line(player[i].name,player[i].pos))
			}
		}
		firstTurn=false

		sleep(1000)
		reset_board()
		// console.log("=======")
	}
	console.log("winner: " + winner);

}

function reset_board() {
  console.log("\x1B[2J")
}

var command = process.argv
var trackLength=command[2]
var player= advanced_player(command[3])
print_board()
