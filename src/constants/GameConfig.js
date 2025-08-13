import { Turns } from "./Turns";

export const config = {
  tiempo: 10,

  scorePlayer: {
    p1: 0,
    p2: 0,
  },

  InitialGame: {
    initialStep:1,
    initialWinner:null,
    initialBoard:Array(42).fill(null),
    initialTurn:Turns.P1,
  }
};
