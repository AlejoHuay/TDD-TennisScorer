import showScore from "./tennisScorer.js";

describe("TennisScorer", () => {
  //Empieza sin puntos     --> "Love - Love"
  it("game empieza con ambos en cero", () => {
    expect(showScore()).toEqual("Love - Love");
  });
});