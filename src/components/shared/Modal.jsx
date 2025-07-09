import { useState } from "react";
import Btn from "./Btn";

export default function Modal({ children, name, btnColor, bgColor, btnStyle, text, close, bdModal }) {
  const [btnRule, setBtnRule] = useState(false);

  const toggleModal = () => {
    setBtnRule(!btnRule);
  };


  return (
    <>
      <Btn open={toggleModal} btnName={name} color={btnColor} btnStyle={btnStyle} text={text} />

      {btnRule && (
        <dialog open className={`modal ${bgColor}`}>
          <div className={`modal-box border-2 border-black border-b-12 rounded-none shadow-none ${bdModal}`}>
            {children}
            
            {
              close ? <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={() => setBtnRule(!btnRule)}
                  className="btn size-20 rounded-full border-2 border-black border-b-12 hover:border-b-30 transition-all duration-700 "
                >
                  Close
                </button>
              </form>
            </div> : null
            }
          </div>
        </dialog>
      )}
    </>
  );
}
