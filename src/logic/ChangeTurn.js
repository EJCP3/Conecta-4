import { useEffect } from "react";

export const changeTurn = ({updateBoard,setIsRunning,isRunning,turn}) => {


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
  
};
