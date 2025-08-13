import React from "react";
import Header from "../Player/Header";
import Main from "../Player/Main";
import { useUpdateBoard } from "../../hooks/useUpdateBoard";

export default function CPU() {
  const hookData = useUpdateBoard();
  return (
    <div className="w-full h-dvh">
      <Header hookData={hookData} />
      <Main hookData={hookData} />
    </div>
  );
}
