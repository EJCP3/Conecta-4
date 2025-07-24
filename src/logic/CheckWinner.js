const ROWS = 6;
const COLS = 7;
const DIRECTIONS = [
  { dr: 0, dc: 1 }, // →
  { dr: 1, dc: 0 }, // ↓
  { dr: 1, dc: 1 }, // ↘
  { dr: 1, dc: -1 }, // ↙
];

export default function CheckWinner( boardToCheck, index, board ) {

  const player = boardToCheck[index];
  if (!player) return false; 

  const row0 = Math.floor(index / COLS);
  const col0 = index % COLS;

  for (const { dr, dc } of DIRECTIONS) {
    let count = 1;

   
    let row = row0 + dr;
    let column = col0 + dc;
    while (
      row >= 0 &&
      row < ROWS &&
      column >= 0 &&
      column < COLS &&
      board[row * COLS + column] === player
    ) {
      count++;
      row += dr;
      column += dc;
    }

    row = row0 - dr;
    column = col0 - dc;
    while (
      row >= 0 &&
      row < ROWS &&
      column >= 0 &&
      column < COLS &&
      board[row * COLS + column] === player
    ) {
      count++;
      row -= dr;
      column -= dc;
    }

    if (count >= 4) return player;
  }

  return false;
}
