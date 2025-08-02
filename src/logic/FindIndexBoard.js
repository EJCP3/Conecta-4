export const findIndexBoard = (board, columna) => {
  for (let fila = 6; fila >= 0; fila--) {
    const i = fila * 7 + columna;

    if (board[i] === null) {
      return i;
    }
  }
};
