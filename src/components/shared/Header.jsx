import Modal from "./Modal";

export default function Header() {
  return (
    <nav className="flex justify-between navbar mx-auto max-w-200">
      <div className="">
        <Modal name={"MENU"}></Modal>
      </div>
      <img src="/logo.svg" />
      <button class="btn btn-soft  !bg-transparent border-none hover:!bg-neutral hover:!text-base-100">Reset</button>
    </nav>
  );
}
