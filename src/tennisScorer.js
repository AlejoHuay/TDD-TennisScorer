class TennisScorer {
  constructor(){
    this.player1Points = 0;
    this.player2Points = 0;
  }

  showScore(){
    if(this.player1Points === 0 && this.player2Points === 0){
      return "Love - Love"
    }else if (this.player1Points === 1 && this.player2Points === 0){
      return "15 - Love"
    }else if(this.player1Points === 2 && this.player2Points === 0){
      return "30 - 0"
    }else if(this.player1Points === 3 && this.player2Points === 0){
      return "40 - 0"
    }else if(this.player2Points === 1 && this.player1Points === 0){
      return "Love - 15"
    }else if(this.player2Points === 2 && this.player1Points === 0){
      return "0 - 30"
    }else if(this.player2Points === 3 && this.player1Points === 0){
      return "0 - 40"
    }else if(this.player2Points === 3 && this.player1Points === 3){
      return "Deuce"
    }else if(this.player2Points === 3 && this.player1Points === 4){
      return "Advantage for 1"
    }else if(this.player2Points === 3 && this.player1Points === 5){
      return "Game for Player 1"
    }else if(this.player2Points === 4 && this.player1Points === 3){
      return "Advantage for 2"
    }else if(this.player2Points === 5 && this.player1Points === 3){
      return "Game for Player 2"
    }else if(this.player2Points === 4 && this.player1Points === 4){
      this.player1Points = 3
      this.player2Points = 3
      return "Deuce"
    }else{
      let p1="";
      let p2="";
      let res="";
      if      (this.player1Points === 1){
        p1="15";
      }else if(this.player1Points === 2){
        p1="30";
      }else if(this.player1Points === 3){
        p1="40";
      }
      if      (this.player2Points === 1){
        p2="15";
      }else if(this.player2Points === 2){
        p2="30";
      }else if(this.player2Points === 3){
        p2="40";
      }
      res= p1 + " - " + p2
      return res;
    }
  }

  playerScores(player, points) {
    if(player === 1){
      this.player1Points+=points;
    }else{
      this.player2Points+=points;
    }
  }
  player1Scores(){
    this.player1Points++;
  }
  player2Scores(){
    this.player2Points++;
  }
}

export default TennisScorer;