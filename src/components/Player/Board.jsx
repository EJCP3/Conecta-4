import Score from "../../shared/Score";
import Circle from "../../shared/Circle.jsx";
import { useTranslation } from "react-i18next";

export default function Board({
  score,
  board,
  updateBoard,
}) {
  const { t } = useTranslation();

  const mapBoard = board.map((_, index) => (
    <Circle key={index} index={index} updateBoard={updateBoard}>
      {board[index]}
    </Circle>
  ));

  return (
    <section className="flex gap-y-2 flex-wrap gap-x-20 mt-5 justify-center sm:items-center">
      <Score name={t("game.player1")} punto={score.p1} />

      <div className="size-80 grid md:size-100 lg:w-140 lg:h-120 grid-cols-7 gap-y-2 mx-auto border-3 rounded-4xl p-4 bg-base-100 border-b-10 order-3 sm:order-2 relative ">
        {mapBoard}
      </div>

      <Score
        name={t("game.player2")}
        punto={score.p2}
        order={"order-2 sm:order-3"}
      />
    </section>
  );
}
