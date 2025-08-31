class TennisScorer {
  constructor(){
    this.player1Points = 0;
    this.player2Points = 0;
  }

  showScore(){
    if      (this.player1Points === 1 && this.player2Points === 0){
      return "15 - Love";
    }else if(this.player1Points === 2 && this.player2Points === 0){
      return "30 - 0"
    }else if(this.player1Points === 3 && this.player2Points === 0){
      return "40 - 0"
    }else if(this.player2Points === 1 && this.player1Points === 0){
      return "0 - 15";
    }else if(this.player2Points === 2 && this.player1Points === 0){
      return "0 - 30"
    }else if(this.player2Points === 3 && this.player1Points === 0){
      return "0 - 40"
    }else if(this.player2Points === 3 && this.player1Points === 3){
      return "Deuce"
    }else if(this.player2Points === 3 && this.player1Points === 4){
      return "Advantage for 1"
    }
    return "Love - Love";
  }

  player1Scores(points) {
    this.player1Points+=points;
  }
  player2Scores(points) {
    this.player2Points+=points;
  }
}

export default TennisScorer;