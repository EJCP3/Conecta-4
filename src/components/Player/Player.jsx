import { useUpdateBoard } from "../../hooks/useUpdateBoard";
import Header from "../../shared/Header";
import Main from "../../shared/Main";



export default function Player() {

  const hookData = useUpdateBoard(); 

  return (
    <div className="w-full h-dvh">
      <Header hookData={hookData} />
      <Main hookData={hookData} />
    </div>
  );
}
