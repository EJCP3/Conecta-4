import { config } from "../constants/GameConfig";

export const resetGame = (
  setBoard,
  setTurn,
  setWinner,
  setCurrentStep,
  setScore,
  value
) => {
  const { scorePlayer,InitialGame } = config;

  const { initialStep, initialWinner, initialBoard, initialTurn } =
    InitialGame;

  setBoard(initialBoard);
  setTurn(initialTurn);
  setWinner(initialWinner);
  setCurrentStep(initialStep);
  
  console.log(value)

  value === true ? setScore(scorePlayer) : null;
};

export const startPlay = (setPlay, setCurrentStep, setIsRunning, value) => {
  setPlay(value);
  setIsRunning(true);
  setCurrentStep(2);
};
