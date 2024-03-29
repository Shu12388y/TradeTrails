import Home from "./components/Home/Home"
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Tools from "./components/Tools";
import Machine from "./components/Machine";
import Plants from "./components/Plants";

const App = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants/>} />
        <Route path="/Tools" element={<Tools/>} />
        <Route path="/Machine" element={<Machine />} />
        <Route path="/Seeds" element={<Login />} />
      </Routes>
     
    </div>
  )
}

export default App