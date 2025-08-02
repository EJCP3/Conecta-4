import {config } from "../constants/GameConfig"

export const resetGame = (setBoard,setTurn,setWinner,setCurrentStep) => {

  const {initialStep,initialWinner,initialBoard,initialTurn} = config.InitialGame

    setBoard(initialBoard);
    setTurn(initialTurn);
    setWinner(initialWinner);
    setCurrentStep(initialStep);
  };


export const startPlay = (setPlay,setCurrentStep,setIsRunning,value) => {

    setPlay(value);
    setIsRunning(true);
    setCurrentStep(2);
}