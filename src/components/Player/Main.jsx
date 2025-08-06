import Board from "./Board.jsx";
import CurrentStep from "./CurrentStep.jsx";

export default function Main({ hookData }) {
  const { score, board, updateBoard, animatingPieces = [],  isAnimating = false } = hookData;


  return (
    <section className=" flex gap-y-2 flex-wrap sm:gap-x-0 w-11/12 lg:max-w-300 mx-auto gap-x-20 mt-5 justify-center sm:items-center  ">
      <Board score={score} board={board} updateBoard={updateBoard}  animatingPieces={animatingPieces}    isAnimating={isAnimating}  />
      <CurrentStep hookData={hookData} />
    </section>
  );
}
