import Score from "../../shared/Score";
import Circle from "../../shared/Circle.jsx";
import { useTranslation } from "react-i18next";

export default function Board({
  score,
  board,
  updateBoard,
  animatingPieces = [],
}) {
  console.log(animatingPieces);
    const { t } = useTranslation();

  // Renderizar piezas que se están animando
  const renderAnimatingPieces = () => {
  const leftOffsets = {
    0: '7.14%',
    1: '21.42%',
    2: '35.71%',
    3: '50%',
    4: '64.28%',
    5: '80%',
    6: '88%',
  };

  return animatingPieces.map((piece) => (
    <div
      key={piece.id}
      className={`
        absolute z-20 rounded-full size-8 md:size-10 lg:size-14
        transition-all duration-200 ease-in
        ${piece.player === "X" ? "bg-red-500" : "bg-blue-500"}
        flex items-center justify-center font-bold
        shadow-lg transform scale-110
      `}
      style={{
        left: leftOffsets[piece.col],
        top: `${(piece.currentRow + 0.5) * (100 / 6)}%`, // 6 filas
        transform: "translate(-50%, -50%) scale(1.1)",
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
      <Score name={t('game.player1')} punto={score.p1} />

      <div className="size-80 grid md:size-100 lg:w-140 lg:h-120 grid-cols-7 gap-y-2 mx-auto border-3 rounded-4xl p-4 bg-base-100 border-b-10 order-3 sm:order-2 relative ">
        {/* Tablero principal */}
        {mapBoard}

        {/* Piezas animándose */}
        {renderAnimatingPieces()}
      </div>

      <Score name={t('game.player1')} punto={score.p2} order={"order-2 sm:order-3"} />
    </section>
  );
}
