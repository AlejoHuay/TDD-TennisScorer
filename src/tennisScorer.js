class TennisScorer {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
    this.bandera = true; 
  }

  resetGame() {
    this.player1Points = 0;
    this.player2Points = 0;
    this.bandera = true;
  }

  showScore() {
    if (!this.bandera) {
      return `Game for Player ${this.player1Points > this.player2Points ? 1 : 2}`;
    }

    const p1 = this.player1Points;
    const p2 = this.player2Points;

    if (p1 === 4 && p2 <= 2) { this.bandera = false; return "Game for Player 1"; }
    if (p2 === 4 && p1 <= 2) { this.bandera = false; return "Game for Player 2"; }

    if (p1 >= 3 || p2 >= 3) {
      if (p1 === 3 && p2 === 3) return "Deuce";            // 40-40
      if (p1 === 4 && p2 === 3) return "Advantage for 1";  // 40-Adv
      if (p2 === 4 && p1 === 3) return "Advantage for 2";  // Adv-40
      if (p1 === 5 && p2 === 3) { this.bandera = false; return "Game for Player 1"; }
      if (p2 === 5 && p1 === 3) { this.bandera = false; return "Game for Player 2"; }
    }

    const scoreLabels = ["Love", "15", "30", "40"];
    function scoreSelector(n) {
      return scoreLabels[n] ?? String(n);
    }

    return scoreSelector(p1) + " - " + scoreSelector(p2);

  }

  playerScores(player, points) {
    if (this.bandera === true){
      if (player === 1){
        this.player1Points += points;
      }else{
        this.player2Points += points;
      }
    } 

    if (this.player1Points >= 3 && this.player2Points >= 3 && this.player1Points === this.player2Points) {
      this.player1Points = 3;
      this.player2Points = 3;
    }

  }

  player1Scores() { 
    this.playerScores(1,1); 
  }
  player2Scores() { 
    this.playerScores(2,1); 
  }
}

export default TennisScorer;
