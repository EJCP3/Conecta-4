import Modal from "../../shared/Modal";


export default function Rules() {
  return (
    <Modal close={true} name={"GAME RULES"} btnColor={"bg-info hover:border-primary"} bgColor={"!bg-info"}>
      <h2 className="font-bold text-4xl text-center ">Rules</h2>
            <h4 className="py-4 text-primary">OBJECTIVE</h4>
            <p className="mb-6">
              Be the first player to connect 4 of the same colored discs in a
              row(either vertically, horizontally, or diagonally).
            </p>
            <h4 className="text-primary my-2">HOW TO PLAY</h4>
            <ol
              className="flex flex-col gap-y-2 list-decimal px-6 
"
            >
              <li>Red goes first in the first game.</li>
              <li>
                Players must alternate turns, and only one disc can be dropped
                in earch turn.
              </li>

              <li>The game ands when there is a 4-in-a-row or a stalemate.</li>

              <li>
                the starter od the previous game goes second on the next game.
              </li>
            </ol>
    </Modal>
  );
}
