import TennisScorer from "./tennisScorer.js";

//Para un ciclo de TDD primero modificamos  la prueba it anterior (copiamos una nueva) para que de error (rojo)
// luego modificamos la funcion para que la sig prueba ya de verde
// si es nescesario refactorizamos antes de hacer commit

describe("TennisScorer", () => {
    
  // Empeiza sin puntos ---> "Love - Love"
  it("game empieza con ambos jugadores en cero", () => {
    const scorer = new TennisScorer();
    expect(scorer.showScore()).toEqual("Love - Love");
  });

  it("Jugador 1 marca un punto ---> 15 - love", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores(1);
    expect(scorer.showScore()).toEqual("15 - Love");
  });

  it("Jugador 1 marca dos veces un punto ---> 30 - 0", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores(2);
    expect(scorer.showScore()).toEqual("30 - 0");
  });

  it("Jugador 1 marca tres veces un punto ---> 40 - 0", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores(3);
    expect(scorer.showScore()).toEqual("40 - 0");
  });

  it("Jugador 2 marca un punto ---> 0 - 15", () => {
    const scorer = new TennisScorer();
    scorer.player2Scores(1);
    expect(scorer.showScore()).toEqual("0 - 15");
  });

  it("Jugador 2 marca dos veces un punto ---> 0 - 30", () => {
    const scorer = new TennisScorer();
    scorer.player2Scores(2);
    expect(scorer.showScore()).toEqual("0 - 30");
  });

});