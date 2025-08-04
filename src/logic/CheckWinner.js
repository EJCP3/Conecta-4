import { Turns } from "../constants/Turns";

export default function checkWinner(newBoard) {
  const COLS = 7

  function getPlayerPositions(player) {
    const positions = [];
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === player) {
        positions.push({
          x: i % COLS,
          y: Math.floor(i / COLS),
          index: i,
        });
      }
    }
    return positions;
  }

  function checkPlayerWin(playerMoves, player) {
    for (let i = 0; i < playerMoves.length; i++) {
      const move = playerMoves[i];

      if (
        playerMoves.find((m) => m.x === move.x + 1 && m.y === move.y) &&
        playerMoves.find((m) => m.x === move.x + 2 && m.y === move.y) &&
        playerMoves.find((m) => m.x === move.x + 3 && m.y === move.y)
      ) {
        return player;
      }

      if (
        playerMoves.find((m) => m.x === move.x && m.y === move.y + 1) &&
        playerMoves.find((m) => m.x === move.x && m.y === move.y + 2) &&
        playerMoves.find((m) => m.x === move.x && m.y === move.y + 3)
      ) {
        return player;
      }

      if (
        playerMoves.find((m) => m.x === move.x + 1 && m.y === move.y + 1) &&
        playerMoves.find((m) => m.x === move.x + 2 && m.y === move.y + 2) &&
        playerMoves.find((m) => m.x === move.x + 3 && m.y === move.y + 3)
      ) {
        return player;
      }

      if (
        playerMoves.find((m) => m.x === move.x + 1 && m.y === move.y - 1) &&
        playerMoves.find((m) => m.x === move.x + 2 && m.y === move.y - 2) &&
        playerMoves.find((m) => m.x === move.x + 3 && m.y === move.y - 3)
      ) {
        return player;
      }
    }
    return null;
  }

  const player1Positions = getPlayerPositions(Turns.P1);
  const player2Positions = getPlayerPositions(Turns.P2);

  const winner1 = checkPlayerWin(player1Positions, Turns.P1);
  if (winner1) return winner1;

  const winner2 = checkPlayerWin(player2Positions, Turns.P2);
  if (winner2) return winner2;

  return null; 
}
