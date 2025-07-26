import { Link } from "react-router-dom";
import Btn from "./Btn";
import Modal from "./Modal";
import { useState } from "react";

export default function Header({ hookData }) {
  const [btnRule, setBtnRule] = useState(false);
  const { resetGame, startPlay } = hookData;

    const toggleModal = () => {
    setBtnRule(!btnRule);
    console.log(btnRule)
  };


  return (
    <nav className="flex justify-between navbar mx-auto max-w-200">
      <div>
        <Modal
        
          text={"text-x"}
          name={"MENU"}
          bdModal={"!rounded-4xl"}
          btnStyle={
            "w-26 !h-10 bg-black/20 hover:!bg-neutral hover:!text-base-100"
          }
          close={false}
        >
          <section className="flex gap-y-2 flex-col">
            <h1 className="text-center my-2 text-4xl">PAUSE</h1>
            <Btn
              open={toggleModal}
              btnName={"CONTINUE GAME"}
              color={"hover:border-success"}
            />
            <Link to="/">
              <Btn
                text={"text-white"}
                color={"bg-error hover:border-primary"}
                btnName={"QUIT GAME"}
              />
            </Link>
          </section>
        </Modal>
      </div>
      <img src="/logo.svg" />
      <button
        onClick={() => {
          startPlay(false);
          resetGame();
        }}
        className="btn w-26 h-10 bg-black/20 border-none hover:!bg-neutral hover:!text-base-100"
      >
        RESET
      </button>
    </nav>
  );
}
