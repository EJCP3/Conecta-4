import { Turns } from "../constants/Turns";

export default function ResetGame(setBoard, setTurn, setWinner) {
  setBoard(Array(42).fill(null));
  setTurn(Turns.P1);
  setWinner(null);
}
