import { useRef } from "react";

import Btn from "./shared/btn";
import { useState } from "react";

export default function ModalRules() {
  const [btnRule, setBtnRule] = useState(false);

  const toggleModal = () => {
    setBtnRule(!btnRule);
    console.log(btnRule)
  };

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
            <h2 className="font-bold text-lg">Rules</h2>
            <h4 className="py-4">OBJECTIVE</h4>
            <p>
              Be the first player to connect 4 of the same colored discs in a
              row(either vertically, horizontally, or diagonally).
            </p>
            <h4>HOW TO PLAY</h4>
            <ol>
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
                <button className="btn size-20 rounded-full border-2 border-black border-b-12 hover:border-b-30 transition-all duration-700 ">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
