import { useState } from "react";
import Modal from "@/shared/Modal";
import { useTranslation } from "react-i18next";


export default function Rules() {
      const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);

  return (
    <Modal close={true} name={t('home.btn4')} btnColor={"bg-info hover:border-primary"} bgColor={"!bg-info"}   open={modalOpen}
          onClose={() => setModalOpen(false)}
          onOpen={() => setModalOpen(true)}>
      <h2 className="font-bold text-4xl text-center ">{t('rules.title')}</h2>
            <h4 className="py-4 text-primary">{t('rules.subTitle')}</h4>
            <p className="mb-6">
              {t('rules.rule1')}
            </p>
            <h4 className="text-primary my-2"> {t('rules.subTitle2')}</h4>
            <ol
              className="flex flex-col gap-y-2 list-decimal px-6 
"
            >
              <li> {t('rules.rule3')}</li>
              <li>
               {t('rules.rule4')}
              </li>

              <li> {t('rules.rule5')}</li>

              <li>
                 {t('rules.rule6')}
              </li>
            </ol>
    </Modal>
  );
}
