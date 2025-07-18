import { useState } from "react";
import logo from "/turn-bg.svg";
import { Bola1, Bola2 } from "./Bola";
import { useAsyncError } from "react-router-dom";

export const Turns = {
  P1: <Bola1 />,
  P2: <Bola2 />,
};

const Circle = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
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
  const [currentStep, setCurrentStep] = useState(1);
  const [play, setPlay] = useState(false);
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(Turns.P1);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ P1: 1, P2: 2 });

  const ResetGame = () => {
    setBoard(Array(42).fill(null));
    setTurn(Turns.P1);
     setWinner(null)
  };

  const startPlay = (value) => {
    setPlay(value);
  };

  const checkWinner = (boardToCheck, index) => {
    const ROWS = 6;
    const COLS = 7;
    const DIRECTIONS = [
      { dr: 0, dc: 1 }, // →
      { dr: 1, dc: 0 }, // ↓
      { dr: 1, dc: 1 }, // ↘
      { dr: 1, dc: -1 }, // ↙
    ];

    const player = boardToCheck[index];
    if (!player) return false; // Celda vacía ⇒ no puede haber ganador

    const row0 = Math.floor(index / COLS);
    const col0 = index % COLS;

    for (const { dr, dc } of DIRECTIONS) {
      let count = 1;

      // Recorre en la dirección positiva
      let row = row0 + dr;
      let column = col0 + dc;
      while (
        row >= 0 &&
        row < ROWS &&
        column >= 0 &&
        column < COLS &&
        board[row * COLS + column] === player
      ) {
        count++;
        row += dr;
        column += dc;
      }

      // Recorre en la dirección contraria
      row = row0 - dr;
      column = col0 - dc;
      while (
        row >= 0 &&
        row < ROWS &&
        column >= 0 &&
        column < COLS &&
        board[row * COLS + column] === player
      ) {
        count++;
        row -= dr;
        column -= dc;
      }

      if (count >= 4) return player;
    }

    return false;
  };

  const updateBoard = (index) => {
    if (!play) return;
    if (board[index] || winner) return;

    const columna = index % 7;

    for (let fila = 6; fila >= 0; fila--) {
      const i = fila * 7 + columna;
      if (board[i] === null) {
        const newBoard = [...board];
        newBoard[i] = turn;
        setBoard(newBoard);

        const newTurn = turn === Turns.P1 ? Turns.P2 : Turns.P1;
        setTurn(newTurn);
        const newWinner = checkWinner(newBoard, index);
        if (newWinner) {
          setWinner(newWinner);
          setScore((prev) => ({
            ...prev,
            P1: winner === Turns.P1 ? score.P1++ : score.P1++,
            P2: winner === Turns.P2 ? score.P2++ : score.P2++,
          }));score

          setCurrentStep(3);
        }

        break;
      }
    }
  };

  return (
    <section className=" flex gap-y-2 flex-wrap sm:gap-x-0    w-11/12 lg:max-w-300 mx-auto gap-x-20 mt-5 justify-center sm:items-center  ">
      <div className="size-30 rounded-xl border-b-10 border-3 bg-base-100 p-6 text-2xl text-center">
        <img />
        <h2>YOU</h2>
        <p> {score.P1} </p>
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
        <h2 className="-ml-1">PLAYER</h2>
        <p>{score.P2}</p>
      </div>

      <footer className="w-full h-60   rounded-2xl  p-10 order-4  flex justify-center items-center border-b-10 border-3 ">
        {currentStep === 1 && (
          <div className="w-60 h-40 rounded-xl border-b-10 border-3 bg-base-100 p-6 order-2 text-center  ">
            <p>PLAYERS STARTS</p>
            <h1 className="text-2xl">READY ?</h1>
            <button
              onClick={() => {
                startPlay(true);
                setCurrentStep(2);
              }}
              className="btn btn-info w-30 mx-auto rounded-2xl"
            >
              PLAY
            </button>
          </div>
        )}
        {currentStep === 2 && (
          <figure className="relative  p-6 order-2 text-center bg-red-20">
            <svg
              width="197"
              height="165"
              xmlns="http://www.w3.org/2000/svg"
              stroke="bg-red-300"
              fill="none"
              viewBox="0 0 197 165"
            >
              <defs>
                <filter
                  x="-4.2%"
                  y="-4.2%"
                  width="108.4%"
                  height="116.2%"
                  filterUnits="objectBoundingBox"
                  id="a"
                >
                  <feMorphology
                    radius="3"
                    operator="dilate"
                    in="SourceAlpha"
                    result="shadowSpreadOuter1"
                  />
                  <feOffset
                    dy="10"
                    in="shadowSpreadOuter1"
                    result="shadowOffsetOuter1"
                  />
                  <feComposite
                    in="shadowOffsetOuter1"
                    in2="SourceAlpha"
                    operator="out"
                    result="shadowOffsetOuter1"
                  />
                  <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    in="shadowOffsetOuter1"
                  />
                </filter>
                <path
                  d="M12.239 34.847 87.279 3.25a20 20 0 0 1 15.454-.029l75.96 31.65A20 20 0 0 1 191 53.333V130c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V53.28a20 20 0 0 1 12.239-18.433Z"
                  id="b"
                />
              </defs>
              <g transform="translate(3 2)" fill="none" fillRule="evenodd">
                <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                <path
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="currentColor"
                  className={`${
                    turn === Turns.P1 ? "fill-info" : "fill-error"
                  }`}
                  d="M86.697 1.868a21.5 21.5 0 0 1 16.613-.03l75.96 31.65a21.478 21.478 0 0 1 9.62 7.92 21.478 21.478 0 0 1 3.61 11.925V130a21.433 21.433 0 0 1-6.297 15.203A21.433 21.433 0 0 1 171 151.5H20a21.433 21.433 0 0 1-15.203-6.297A21.433 21.433 0 0 1-1.5 130V53.28c0-4.326 1.296-8.44 3.589-11.893a21.478 21.478 0 0 1 9.568-7.923Z"
                />
              </g>
            </svg>
            <figcaption className="text-xl absolute top-1/4 left-1/2 -translate-x-1/2 text-white font-bold ">
              PLAYER 1 STARTS
            </figcaption>
            <figcaption className=" absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl text-white font-bold mt-2">
              30S
            </figcaption>
          </figure>
        )}

        {currentStep === 3 && (
          <div
            className={`${
              turn === Turns.P1 ? "bg-info" : "bg-error"
            } flex-col  w-60 h-40 rounded-xl border-b-10 border-3 bg-base-100 p-6 order-2 text-center flex items-center justify-center text-2xl gap-y-1 `}
          >
            <h2 className="">Player 1</h2>
            <p>WINS</p>
            <button
              onClick={() => {
                startPlay(false);
                ResetGame();
                setCurrentStep(1);
              }}
              className="btn w-30 mx-auto rounded-2xl"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </footer>
    </section>
  );
}
