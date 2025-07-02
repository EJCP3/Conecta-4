import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Player from "./components/Player"
import CPU from "./components/CPU"

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
