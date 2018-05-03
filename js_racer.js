"use strict"

class Dice {
  constructor() {
    this.result = 0;
  }

  roll() {
    this.result = Math.ceil(Math.random()*6)
    return this.result
  }
}

class JSRacer {
  constructor(players, length) {
    this.players = [];

    for (let i = 0; i < players; i++) {
      let listNama = 'abcdefghijklmnopqrstuvwxyz';
      this.players.push({
        nama : listNama[i],
        posisi : 0,
      })
    }

    this.dice = new Dice();
    this.length = length;
    this.board = [];
    this.playerpos = []
    this.juara = false;
    this.pemenang = '';
  }

  print_board() {
    this.board = [];
    for (var i = 0; i < this.players.length; i++) {
      this.board.push(this.print_line(this.players[i].nama,this.players[i].posisi));
    }
    return this.board.join('\n');
  }

  print_line(player, pos) {
    let arr = []
    for(var j = 0; j < this.length; j++){
      if(pos === j){
        arr.push(player);
      } else {
        arr.push(' ')
      }
    }
    return arr.join(' | ')
  }

  advanced_player() {
    let fixMenang = false;
    for(let k = 0; k < this.players.length; k++){
      if(fixMenang === false){
        this.players[k].posisi += this.dice.roll();
        if(this.players[k].posisi >= this.length-1){
          this.players[k].posisi = this.length-1;
          this.juara = true;
          this.pemenang = this.players[k].nama;
          fixMenang = true;
        }
      }
    }
    console.log(this.print_board());
  }

  finished() {
    while(this.juara === false){
      this.advanced_player();
    //   // pake while looping advanced player terus sampai ada yang posisinya nyampe ke j;
    }
    console.log(this.winner());
  }

  winner() {
    return `
    Jeng jeng jeng jeng....
    Woohoooo...!
    Pemenangnya adalah... ${this.pemenang}`;
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;


let race = new JSRacer(4,12);
// console.log(race.advanced_player(4))
// console.log(race.print_board())
// console.log(race.print_board());
// console.log(race.advanced_player());
race.finished();
// console.log(race.players)
