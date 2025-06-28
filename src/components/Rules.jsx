
import Btn from "./shared/btn";
import { useState } from "react";

export default function ModalRules() {
  const [btnRule, setBtnRule] = useState(false);

  const toggleModal = () => {
    setBtnRule(!btnRule);
  };

      console.log(btnRule);


  return (
    <>
      <Btn
        open={toggleModal}
        texto="GAME RULES"
        color="bg-info hover:border-primary"
      />

      {btnRule && (
        <dialog open className="modal  !bg-red-300  ">
          <div className="modal-box border-2 border-black border-b-12 rounded-none shadow-none">
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
            <div className="modal-action">
              <form method="dialog">
                <button onClick={() => setBtnRule(!btnRule)} className="btn size-20 rounded-full border-2 border-black border-b-12 hover:border-b-30 transition-all duration-700 ">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
