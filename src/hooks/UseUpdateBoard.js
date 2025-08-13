import { useState, useEffect } from "react";
import checkWinner from "../logic/CheckWinner";
import { Turns } from "../constants/Turns";
import { findIndexBoard } from "../logic/FindIndexBoard";
import { config } from "../constants/GameConfig";
import { resetGame, startPlay } from "../logic/ChangeGame";

export function useUpdateBoard() {
  const { initialStep, initialWinner, initialBoard, initialTurn } =
    config.InitialGame;

  const [currentStep, setCurrentStep] = useState(initialStep);
  const [winner, setWinner] = useState(initialWinner);
  const [score, setScore] = useState(config.scorePlayer);
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState(initialTurn);
  const [isRunning, setIsRunning] = useState(false);
  const [play, setPlay] = useState(false);
  

  const [time, setTime] = useState(config.tiempo);

  const updateBoard = (index) => {
    const IndexAleatorio = Math.floor(Math.random() * 6);
    const newIndex = index ?? IndexAleatorio;
    if (!play || board[newIndex] || winner) return;

    const columna = index ? index % 7 : IndexAleatorio;

    const NuevoIndex = findIndexBoard(board, columna);
    const newBoard = [...board];
    newBoard[NuevoIndex] = turn;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard, newIndex, board);
    if (newWinner) {
      setWinner(newWinner);
      setScore((prevScore) => ({
        p1: turn === Turns.P1 ? prevScore.p1 + 1 : prevScore.p1,
        p2: turn === Turns.P2 ? prevScore.p2 + 1 : prevScore.p2,
      }));
      setCurrentStep(3);
      setIsRunning(false);
      return;
    }

    const newTurn = turn === Turns.P1 ? Turns.P2 : Turns.P1;
    setTurn(newTurn);
    setTime(config.tiempo);
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

  const handleResetGame = () => {
    resetGame(setBoard, setTurn, setWinner, setCurrentStep);
  };

  const handleStartPlay = (value) => {
    startPlay(setPlay, setCurrentStep, setIsRunning, value);
  };

  return {
    score,
    updateBoard,
    board,
    winner,
    turn,
    time,
    handleResetGame,
    handleStartPlay,
    currentStep,
  };
}
