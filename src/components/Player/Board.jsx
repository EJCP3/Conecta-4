import Score from "../../shared/Score"
import Circle from "../../shared/Circle.jsx";



export default function Board({score, board, updateBoard}) {

  
  
  const mapBoard = board.map((_, index) => (
    <Circle key={index} index={index} updateBoard={updateBoard}>
      {board[index]}
    </Circle>
  ));


  return (
    <section className="flex gap-y-2 flex-wrap   gap-x-20 mt-5 justify-center sm:items-center">
      <Score name={"PLAYER 1"} punto={score.p1} />

      <div className="size-80 grid md:size-100 lg:w-140 lg:h-120  grid-cols-7 gap-y-2   mx-auto  border-3  rounded-4xl p-4 bg-base-100  border-b-10 order-3 sm:order-2">
        {mapBoard}
      </div>

      <Score name={"PLAYER 2"} punto={score.p2} order={"order-2 sm:order-3"} />
    </section>
  )
}
