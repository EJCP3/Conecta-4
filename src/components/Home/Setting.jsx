import Modal from "../../shared/Modal";


export default function Setting() {
  return (
    <Modal close={true} name={"SETTING"} btnColor={"bg-warning hover:border-error"} bgColor={"!bg-warning"}>
      <h2 className="font-bold text-4xl text-center ">Setting</h2>
      <article className="flex flex-col justify-center my-4">
        <h3 className="font-bold text-2xl my-2 ">Theme</h3>
        <div className="join   join-vertical md:join-horizontal">
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Dark"
            value="dark"
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Retro"
            value="retro"
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Cyberpunk"
            value="cyberpunk"
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Valentine"
            value="valentine"
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Aqua"
            value="aqua"
          />
        </div>
      </article>
      <article className="my-4">
        <h3 className="font-bold text-2xl my-2">Idiomas</h3>
        <div className="join    join-vertical md:join-horizontal">
          <button className="btn join-item">Español</button>
          <button className="btn join-item">English</button>
        </div>
      </article>
      <article className="my-4">
        <h3 className="font-bold text-2xl my-2">Music</h3>
        <label class="flex cursor-pointer gap-2">
          <span class="label-text">OFF</span>
          <input
            type="checkbox"
            value="synthwave"
            class="toggle theme-controller"
          />
          <span class="label-text">ON</span>
        </label>
      </article>
    </Modal>
  );
}
