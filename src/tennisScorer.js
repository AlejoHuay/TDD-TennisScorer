class TennisScorer {
  constructor(){
    this.player1Points = 0;
  }

  showScore(){
    return "Love - Love";
  }

  player1Scores() {
    this.player1Points++;
  }
}

export default TennisScorer;