class TennisScorer {
  constructor(){
    this.player1Points = 0;
  }

  showScore(){
    if(this.player1Points === 1){
      return "15 - Love";
    }
    return "Love - Love";
  }

  player1Scores() {
    this.player1Points++;
  }
}

export default TennisScorer;