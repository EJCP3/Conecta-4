import Modal from "@/shared/Modal";
import { useTranslation } from "react-i18next";
import "@/logic/i18n"; // Asegúrate de importar la config
import Theme from "./Theme";
import { useState } from "react";


export default function Setting() {
    const [modalOpen, setModalOpen] = useState(false);
  
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Modal
      close={true}
      name={"SETTING"}
      btnColor={"bg-warning hover:border-error"}
      bgColor={"!bg-warning"}
        open={modalOpen}
          onClose={() => setModalOpen(false)}
          onOpen={() => setModalOpen(true)}
    >
      <h2 className="font-bold text-4xl text-center ">{t("settings.title")}</h2>
      <article className="flex flex-col justify-center my-4">
        <h3 className="font-bold text-2xl my-2 ">{t("settings.subTitle")}</h3>
        <Theme />
      </article>
      <article className="my-4">
        <h3 className="font-bold text-2xl my-2">{t("settings.subTitle2")}</h3>
        <div className="join    join-vertical md:join-horizontal">
          <button
            onClick={() => changeLanguage("es")}
            className="btn join-item"
          >
            {t("settings.languages.es")}
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="btn join-item"
          >
            {t("settings.languages.en")}
          </button>
        </div>
      </article>
    </Modal>
  );
}
