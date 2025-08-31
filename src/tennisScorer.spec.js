import TennisScorer from "./tennisScorer.js";

//Para un ciclo de TDD primero modificamos  la prueba it anterior (copiamos una nueva) para que de error (rojo)
// luego modificamos la funcion para que la sig prueba ya de verde
// si es nescesario refactorizamos antes de hacer commit

describe("TennisScorer", () => {
    
  // Empieza sin puntos ---> "Love - Love"
  it("game empieza con ambos jugadores en cero", () => {
    const scorer = new TennisScorer();
    expect(scorer.showScore()).toEqual("Love - Love");
  });

  it("Jugador 1 marca un punto ---> 15 - love", () => {
    const scorer = new TennisScorer();
    scorer.playerScores(1,1);
    expect(scorer.showScore()).toEqual("15 - Love");
  });

  it("Jugador 1 marca dos veces un punto ---> 30 - 0", () => {
    const scorer = new TennisScorer();
    scorer.playerScores(1,2);
    expect(scorer.showScore()).toEqual("30 - 0");
  });

  it("Jugador 1 marca tres veces un punto ---> 40 - 0", () => {
    const scorer = new TennisScorer();
    scorer.playerScores(1,3);
    expect(scorer.showScore()).toEqual("40 - 0");
  });

  it("Jugador 2 marca un punto ---> 0 - 15", () => {
    const scorer = new TennisScorer();
    scorer.playerScores(2,1);
    expect(scorer.showScore()).toEqual("0 - 15");
  });

  it("Jugador 2 marca dos veces un punto ---> 0 - 30", () => {
    const scorer = new TennisScorer();
    scorer.playerScores(2,2);
    expect(scorer.showScore()).toEqual("0 - 30");
  });

  it("Jugador 2 marca tres veces un punto ---> 0 - 40", () => {
    const scorer = new TennisScorer();
    scorer.playerScores(2,3);
    expect(scorer.showScore()).toEqual("0 - 40");
  });

  it("Jugador 1 marco 3 veces y jugador marca 3 --> Deuce", () => {
    const scorer = new TennisScorer();
    scorer.playerScores(2,3);
    scorer.playerScores(1,3);
    expect(scorer.showScore()).toEqual("Deuce");
  });

  it("Estando en Deuce si marca jugador 1 -->  Advantage for 1", () => {
    const scorer = new TennisScorer();
    scorer.playerScores(2,3);
    scorer.playerScores(1,4);
    expect(scorer.showScore()).toEqual("Advantage for 1");
  });

  it("Estando en Deuce si marca jugador 2 -->  Advantage for 2", () => {
    const scorer = new TennisScorer();
    scorer.playerScores(2,4);
    scorer.playerScores(1,3);
    expect(scorer.showScore()).toEqual("Advantage for 2");
  });

});