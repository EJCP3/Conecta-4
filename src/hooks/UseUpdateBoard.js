import { useState, useEffect } from "react";
import CheckWinner from "../logic/CheckWinner";
import { Turns } from "../constants/Turns";

export function useUpdateBoard() {
  const tiempo = 1;
  const [currentStep, setCurrentStep] = useState(1);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ P1: 0, P2: 0 });
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(Turns.P1);
  const [isRunning, setIsRunning] = useState(false);
  const [play, setPlay] = useState(false);

  const [time, setTime] = useState(tiempo);

  const updateBoard = (index) => {
    const IndexAleatorio = Math.floor(Math.random() * 6);
    const newIndex = index ?? IndexAleatorio;
    if (!play || board[newIndex] || winner) return;

    const columna = index ? index % 7 : IndexAleatorio;
    for (let fila = 6; fila >= 0; fila--) {
      const i = fila * 7 + columna;
      if (board[i] === null) {
        const newBoard = [...board];
        newBoard[i] = turn;
        setBoard(newBoard);

        const newWinner = CheckWinner(newBoard, newIndex, board);
        if (newWinner) {
          setWinner(newWinner);
          setScore((prevScore) => ({
            P1: turn === Turns.P1 ? prevScore.P1 + 1 : prevScore.P1,
            P2: turn === Turns.P2 ? prevScore.P2 + 1 : prevScore.P2,
          }));
          setCurrentStep(3);
          setIsRunning(false);
          return;
        }

        const newTurn = turn === Turns.P1 ? Turns.P2 : Turns.P1;
        setTurn(newTurn);
        setTime(tiempo);
        break;
      }
    }
  };
  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          updateBoard();
          setIsRunning(true);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, turn]);

  const resetGame = () => {
    setBoard(Array(42).fill(null));
    setTurn(Turns.P1);
    setWinner(null);
    setCurrentStep(1);
    console.log("first");
    console.log(currentStep);
  };

  const startPlay = (value) => {
    setPlay(value);
    setIsRunning(true);
    setCurrentStep(2);
    console.log("first");
  };

  const resetAndStart = () => {
    setBoard(Array(42).fill(null));
    setTurn(Turns.P1);
    setWinner(null);
    setPlay(true); // Activa el juego
    setIsRunning(true); // Activa el timer
    setCurrentStep(1); // Va directo al step de juego
    setTime(tiempo);
    console.log("first");
    console.log(currentStep);
    // Resetea el tiempo
  };

  return {
    resetAndStart,
    score,
    updateBoard,
    board,
    winner,
    turn,
    time,
    resetGame,
    startPlay,
    currentStep,
  };
}
