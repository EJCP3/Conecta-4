import { Link } from "react-router-dom";
import Btn from "../../shared/Btn";
import Rules from "./Rules";
import Setting from "./Setting";
import { useTranslation } from "react-i18next";



export default function Home() {
    const { t } = useTranslation();

  return (
    <main className="flex flex-col justify-center items-center h-screen  ">
      <section className="gap-4 card text-primary-content w-5/6 max-w-110 bg-base-200 p-10 shadow-2xl border-1 border-black border-b-8 ">
        <img className="size-12 mx-auto my-4" src="/logo.svg" />
        <article className="flex  md:flex-col flex-row  ">
          <Link to="/Player">
            <Btn
              btnName={t('home.btn1')}
              color="bg-primary hover:border-success"
            />
          </Link>
          <span className="my-auto md:my-4 md:mx-auto divider ">
            OR
          </span>
          <Btn btnName={t('home.btn2')} color="bg-primary hover:border-success" />
          <div className="divider"></div>
        </article>
        <article className="flex w-full flex-col gap-2 text-black">
          <Rules />
          <Setting />
        </article>
      </section>
    </main>
  );
}
