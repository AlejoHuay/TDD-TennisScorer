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

});