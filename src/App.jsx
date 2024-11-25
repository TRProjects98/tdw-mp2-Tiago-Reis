import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page_1/Homepage";
import Taskpage from "./page_2/Taskpage";
import Weather from "./page_3/Weather";
import AboutMe from "./page_4/About-Me";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Taskpage" element={<Taskpage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
