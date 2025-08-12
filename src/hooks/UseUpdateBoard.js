// En tu archivo useUpdateBoard.js
import { useState, useEffect } from "react";
import checkWinner from "../logic/CheckWinner";
import { Turns } from "../constants/Turns";
import { findIndexBoard } from "../logic/FindIndexBoard";
import { config } from "../constants/GameConfig";
import { resetGame, startPlay } from "../logic/ChangeGame";

export function useUpdateBoard() {
  const { initialStep, initialWinner, initialBoard, initialTurn } =
    config.InitialGame;

  // Estados existentes
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [winner, setWinner] = useState(initialWinner);
  const [score, setScore] = useState(config.scorePlayer);
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState(initialTurn);
  const [isRunning, setIsRunning] = useState(false);
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(config.tiempo);

  // NUEVOS ESTADOS para animación
  const [animatingPieces, setAnimatingPieces] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // NUEVA FUNCIÓN: Animar la caída
  const animateDropping = (animationId, col, targetRow) => {
    let currentRow = -1;
    const animationSpeed = 200;

    const dropInterval = setInterval(() => {
      currentRow++;

      setAnimatingPieces((prev) =>
        prev.map((piece) =>
          piece.id === animationId ? { ...piece, currentRow } : piece
        )
      );

      if (currentRow >= targetRow) {
        clearInterval(dropInterval); 
        finalizePiece(animationId, targetRow * 7 + col);
      }
    }, animationSpeed);
  };

  const finalizePiece = (animationId, finalIndex) => {
    const newBoard = [...board];
    newBoard[finalIndex] = turn;
    setBoard(newBoard);

    // Limpiar animación
    setAnimatingPieces((prev) =>
      prev.filter((piece) => piece.id !== animationId)
    );

    // Verificar ganador
    const newWinner = checkWinner(newBoard, finalIndex, board);
    if (newWinner) {
      setWinner(newWinner);
      setScore((prevScore) => ({
        p1: turn === Turns.P1 ? prevScore.p1 + 1 : prevScore.p1,
        p2: turn === Turns.P2 ? prevScore.p2 + 1 : prevScore.p2,
      }));
      setCurrentStep(3);
      setIsRunning(false);
    } else {
      // Cambiar turno
      const newTurn = turn === Turns.P1 ? Turns.P2 : Turns.P1;
      setTurn(newTurn);
      setTime(config.tiempo);
    }

    setIsAnimating(false);
  };

  // FUNCIÓN MODIFICADA: updateBoard
  const updateBoard = (index) => {
    const IndexAleatorio = Math.floor(Math.random() * 6);
    const newIndex = index ?? IndexAleatorio;

    // Prevenir clicks durante animación
    if (!play || board[newIndex] || winner || isAnimating) return;

    const columna = index ? index % 7 : IndexAleatorio;
    const targetRow = findIndexBoard(board, columna);

    if (targetRow === -1) return; // Columna llena

    // INICIAR ANIMACIÓN en lugar de colocar directamente
    const animationId = Date.now();
    const newAnimatingPiece = {
      id: animationId,
      col: columna,
      player: turn,
      currentRow: -1,
      targetRow: Math.floor(targetRow / 7), // Convertir índice a fila
      finalIndex: targetRow,
    };

    setAnimatingPieces((prev) => [...prev, newAnimatingPiece]);
    setIsAnimating(true);

    // Iniciar animación
    animateDropping(animationId, columna, Math.floor(targetRow / 7));
  };

  // Resto del código existente...
  useEffect(() => {
    if (!isRunning) return;
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          setIsRunning(true);
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isRunning, turn]);

  const handleResetGame = (value) => {
    setIsAnimating(false);
    setAnimatingPieces([]);
    resetGame(setBoard, setTurn, setWinner, setCurrentStep, setScore,value);
  };

  const handleStartPlay = (value) => {
    setIsAnimating(false);
    setAnimatingPieces([]);
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
    animatingPieces,
    isAnimating,
  };
}
