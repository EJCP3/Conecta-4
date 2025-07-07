import { useState } from "react";

export default function Main() {
  const [board, setBoard] = useState(Array(42).fill(null));

  return (
    <section className=" flex gap-y-2 flex-wrap sm:gap-x-0    w-11/12 lg:max-w-300 mx-auto gap-x-20 mt-5 justify-center sm:items-center  ">
      <div className="size-30 rounded-xl border-b-10 border-3 bg-base-100 p-6 text-2xl text-center">
        <img />
        <h2>YOU</h2>
        <p>0</p>
      </div>
      <div className="size-80 grid md:size-100 lg:w-140 lg:h-120  grid-cols-7 gap-y-2   mx-auto  border-3  rounded-4xl p-4 bg-base-100  border-b-10 order-3 sm:order-2">
        {board.map((board, index) => {
          return (
            <div
              key={index}
              className=" rounded-full size-8 md:size-10 lg:size-14 pointer-none border-2 border-t-8  bg-base-300"
            ></div>
          );
        })}
      </div>
      <div className="size-30 rounded-xl border-b-10 border-3 bg-base-100 p-6 order-2 text-center text-2xl sm:order-3">
        <img />
        <h2>CPU</h2>
        <p>0</p>
      </div>

      <footer className="w-full h-60  bg-neutral rounded-2xl  p-10 order-4  flex justify-center items-start border-b-10 border-3 ">
        <div className="w-60 h-40 rounded-xl border-b-10 border-3 bg-base-100 p-6 order-2 text-center  ">
          <p>PLAYER STARTS</p>
          <h1 className="text-2xl">READY ?</h1>
          <button className="btn btn-info w-30 mx-auto rounded-2xl">
            PLAY
          </button>
        </div>
         <div className="figura  size-40 bg-base-100 p-6 order-2 text-center  ">
          <p>PLAYER 1's STARTS</p>
          <h1 className="text-2xl">30S</h1>
        </div>
      </footer>
    </section>
  );
}
