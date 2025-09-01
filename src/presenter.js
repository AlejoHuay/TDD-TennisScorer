import TennisScorer from "./tennisScorer.js";  

const div = document.querySelector("#res-div");
const botonP1 = document.querySelector("#P1Scores-button");  
const botonP2 = document.querySelector("#P2Scores-button"); 
const botonReset = document.querySelector("#reset-button"); 

const scorer = new TennisScorer(); 

const render = () => {
  div.innerHTML = scorer.showScore();
}; 

botonP1.addEventListener("click", function() {
  scorer.player1Scores();
  render();
});
botonP2.addEventListener("click", function() {
  scorer.player2Scores();
  render();
});
botonReset.addEventListener("click", function() {
  scorer.resetGame();
  render();
});

render();
