import { useUpdateBoard } from "../../hooks/useUpdateBoard";
import Main from "./Main"
import Header from "./Header"




export default function Player() {

  const hookData = useUpdateBoard(); 

  return (
    <div className="w-full h-dvh">
      <Header hookData={hookData} />
      <Main hookData={hookData} />
    </div>
  );
}
