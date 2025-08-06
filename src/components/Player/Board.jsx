import Score from "../../shared/Score"
import Circle from "../../shared/Circle.jsx";

export default function Board({ score, board, updateBoard, animatingPieces = [] }) {
  
  // Renderizar piezas que se están animando
  const renderAnimatingPieces = () => {
    return animatingPieces.map(piece => (
      <div
        key={piece.id}
        className={`
          absolute z-20 rounded-full size-8 md:size-10 lg:size-14
          transition-all duration-100 ease-in
          ${piece.player === 'X' ? 'bg-red-500' : 'bg-blue-500'}
          flex items-center justify-center  font-bold
          shadow-lg transform scale-110
        `}
        style={{
          // Calcular posición en el grid
          left: `${(piece.col * (100/7)) + (100/14)}%`, // Centrar en columna
          top: `${Math.max(0, (piece.currentRow + 1) * (100/7)) + (100/14)}%`, // Centrar en fila
          transform: 'translate(-50%, -50%) scale(1.1)'
        }}
      >
        {piece.player}
      </div>
    ));
  };

  const mapBoard = board.map((_, index) => (
    <Circle key={index} index={index} updateBoard={updateBoard}>
      {board[index]}
    </Circle>
  ));

  return (
    <section className="flex gap-y-2 flex-wrap gap-x-20 mt-5 justify-center sm:items-center">
      <Score name={"PLAYER 1"} punto={score.p1} />
      
      <div className="size-80 grid md:size-100 lg:w-140 lg:h-120 grid-cols-7 gap-y-2 mx-auto border-3 rounded-4xl p-4 bg-base-100 border-b-10 order-3 sm:order-2 relative">
        {/* Tablero principal */}
        {mapBoard}
        
        {/* Piezas animándose */}
        {renderAnimatingPieces()}
      </div>
      
      <Score name={"PLAYER 2"} punto={score.p2} order={"order-2 sm:order-3"} />
    </section>
  )
}