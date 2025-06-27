import ModalRules from "./Rules";
import Btn from "./shared/btn";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen  ">
      <section className="gap-4 card text-primary-content w-5/6 max-w-100 bg-base-200 p-10 shadow-2xl border-1 border-black border-b-8 ">
        <img className="size-12 mx-auto my-4" src="/logo.svg" />
        <article className="flex  md:flex-col flex-row  ">
          <Btn texto="PLAY VS CPU" color="bg-primary hover:border-success" />
          <span className="my-auto md:my-4 md:mx-auto divider  text-black">OR</span>
          <Btn texto="PLAY VS PLAYER" color="bg-primary hover:border-success" />
          <div className="divider"></div>
        </article>
        <article className="flex w-full flex-col gap-2 text-black">
        <ModalRules/>
          <Btn texto="SETTING" color="bg-warning hover:border-error" />
        </article>
      </section>
    </main>
  );
}
