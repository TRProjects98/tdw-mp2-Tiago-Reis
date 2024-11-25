import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page_1/Homepage";
import Taskpage from "./page_2/Taskpage";
import Weather from "./page_5/Weather";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Taskpage" element={<Taskpage />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
