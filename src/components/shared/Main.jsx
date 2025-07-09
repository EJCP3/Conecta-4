import { useState } from "react";
import logo from "/turn-bg.svg";
import { Bola1, Bola2 } from "./Bola";
import { Children } from "react";
import { useAsyncError } from "react-router-dom";

export const Turns = {
  P1: <Bola1 />,
  P2: <Bola2 />,
};

const Circle = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
      console.log(index)

  };


  return (
    <div
      onClick={handleClick}
      className=" rounded-full size-8 md:size-10 lg:size-14 pointer-none  bg-base-300 z-10 "
    >
      {children}
    </div>
  );
};

export default function Main() {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(Turns.P1);
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {};

  const updateBoard = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === Turns.P1 ? Turns.P2 : Turns.P1;
    setTurn(newTurn);
  };

  return (
    <section className=" flex gap-y-2 flex-wrap sm:gap-x-0    w-11/12 lg:max-w-300 mx-auto gap-x-20 mt-5 justify-center sm:items-center  ">
      <div className="size-30 rounded-xl border-b-10 border-3 bg-base-100 p-6 text-2xl text-center">
        <img />
        <h2>YOU</h2>
        <p>0</p>
      </div>
      <div className="size-80 grid md:size-100 lg:w-140 lg:h-120  grid-cols-7 gap-y-2   mx-auto  border-3  rounded-4xl p-4 bg-base-100  border-b-10 order-3 sm:order-2">
        {board.map((_, index) => {
          return (
            <Circle key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Circle>
          );
        })}
      </div>
      <div className="size-30 rounded-xl border-b-10 border-3 bg-base-100 p-6 order-2 text-center text-2xl sm:order-3">
        <img />
        <h2>CPU</h2>
        <p>0</p>
      </div>

      <footer className="w-full h-60   rounded-2xl  p-10 order-4  flex justify-center items-start border-b-10 border-3 ">
        <div
          className={`${
            turn === Turns.P1 ? "bg-info" : "bg-error"
          }  w-60 h-40 rounded-xl border-b-10 border-3 bg-base-100 p-6 order-2 text-center flex items-center justify-center  `}
        >
          <p>
            PLAYER{" "}
            <p
              className={`${
                turn === Turns.P1 ? "bg-info" : "bg-error"
              } rounded-full size-8 md:size-10 lg:size-14 pointer-none border-3`}
            />{" "}
            TIME
          </p>
        </div>
        {/* <div className="w-60 h-40 rounded-xl border-b-10 border-3 bg-base-100 p-6 order-2 text-center  ">
          <p>PLAYER STARTS</p>
          <h1 className="text-2xl">READY ?</h1>
          <button className="btn btn-info w-30 mx-auto rounded-2xl">
            PLAY
          </button>
        </div> */}
        {/* <div className="  w-49 h-41  p-6 order-2 text-center  ">
          <img src="turn-bg.svg" />
          <p>PLAYER 1's STARTS</p>
          <h1 className="text-2xl">30S</h1>
        </div> */}
      </footer>
    </section>
  );
}
