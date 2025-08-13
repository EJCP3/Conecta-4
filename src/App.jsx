import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Player from "./components/Player/Player"
import CPU from "./components/CPU/CPU"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/player" element={<Player/>}/>
        <Route path="/cpu" element={<CPU/>}/>
      </Routes>
    </BrowserRouter>
  )
}



export default App
