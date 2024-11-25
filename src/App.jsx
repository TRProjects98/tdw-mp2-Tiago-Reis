import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page_1/Homepage";
import Taskpage from "./page_2/Taskpage";
import TaskpageV2 from "./page_3/TaskpageV2";
import TaskpageV3 from "./page_4/TaskpageV3";
import Weather from "./page_5/Weather";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Taskpage" element={<Taskpage />} />
        <Route path="/TaskpageV2" element={<TaskpageV2 />} />
        <Route path="/TaskpageV3" element={<TaskpageV3 />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
