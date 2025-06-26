
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen  ">
    
    <section className="gap-4 card text-primary-content w-5/6 max-w-100 bg-base-200 p-10 shadow-2xl border-1 border-black border-b-8 " >
    <img className="size-12 mx-auto my-4" src="/logo.svg"/>
      <article class="flex  md:flex-col flex-row  ">
        <a class="card bg-primary rounded-box grid h-20 grow place-items-center border-1 border-black border-b-8 hover:border-success transition-colors duration-500">
          PLAY VS CPU
        </a>
        <span class="my-auto md:my-4 md:mx-auto divider  text-black">OR</span>
        <a class="card bg-primary rounded-box grid  h-20 grow place-items-center border-1 border-black border-b-8">
          PLAY VS PLAYER
        </a>
          <div class="divider"></div>
      </article>
      <article class="flex w-full flex-col gap-2 text-black">
        <a class="card bg-info rounded-box grid h-20 place-items-center border-1 border-black border-b-8 ">
          GAME RULES
        </a>
        <a class="card bg-warning rounded-box grid h-20 place-items-center border-1 border-black border-b-8">
          SETTING
        </a>
      </article>
    </section>
    </main>
  );
}
