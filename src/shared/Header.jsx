import { Link } from "react-router-dom";
import Btn from "./Btn";
import Modal from "./Modal";
import { BtnReset } from "./BtnReset";



export default function Header() {
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
            <Btn btnName={"CONTINUE GAME"} color={"hover:border-success"} />
            <Btn btnName={"RESTART"} color={"hover:border-success"} />
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
      <BtnReset />
    </nav>
  );
}
