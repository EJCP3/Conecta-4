import { useTranslation } from "react-i18next";

import Btn from "./Btn";

// Modal.jsx
export default function Modal({
  children,
  name,
  btnColor,
  bgColor,
  btnStyle,
  text,
  close,
  bdModal,
  open,        // nuevo
  onOpen,      // nuevo
  onClose      // nuevo
}) {
  const { t } = useTranslation();

  return (
    <>
      <Btn
        open={onOpen}
        btnName={name}
        color={btnColor}
        btnStyle={btnStyle}
        text={text}
      />

      {open && (
        <dialog open className={`modal ${bgColor} `}>
          <div
            className={`modal-box border-2 border-black border-b-12 rounded-none shadow-none ${bdModal}`}
          >
            {children}

            {close ? (
              <div className="modal-action ">
                <form method="dialog ">
                  <button
                    onClick={onClose}
                    className="btn size-20 rounded-full border-2 border-black border-b-12 hover:border-b-30 transition-all duration-700 "
                  >
                    {t("settings.btnClose")}
                  </button>
                </form>
              </div>
            ) : null}
          </div>
        </dialog>
      )}
    </>
  );
}
