import { Link } from "react-router-dom";
import Btn from "../../shared/Btn";
import Modal from "../../shared/Modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Header({ hookData }) {
  const [btnRule, setBtnRule] = useState(false);
  const { handleStartPlay, handleResetGame } = hookData;
    const { t } = useTranslation();

  const toggleModal = () => {
    setBtnRule(!btnRule);
    console.log(btnRule);
  };

  return (
    <nav className="flex justify-between navbar mx-auto max-w-200">
      <div>
        <Modal
          text={"text-x"}
          name={t('header.menu')}
          bdModal={"!rounded-4xl"}
          btnStyle={
            "w-26 !h-10 bg-black/20 hover:!bg-neutral hover:!text-base-100"
          }
          close={false}
        >
          <section className="flex gap-y-2 flex-col">
            <h1 className="text-center my-2 text-4xl">{t('header.title')}</h1>
            <Btn
              open={toggleModal}
              btnName={t('header.continue')}
              color={"hover:border-success"}
            />
            <Link to="/">
              <Btn
                text={"text-white"}
                color={"bg-error hover:border-primary"}
                btnName={t('header.close')}
              />
            </Link>
          </section>
        </Modal>
      </div>
      <img src="/logo.svg" />
      <button
        onClick={() => {
          handleStartPlay(false);
          handleResetGame(true);
        }}
        className="btn w-26 h-10 bg-black/20 border-none hover:!bg-neutral hover:!text-base-100"
      >
        {t('header.btnReset')}
      </button>
    </nav>
  );
}
