import { useJsApiLoader } from "@react-google-maps/api";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page1/Homepage";
import WeatherDetails from "./page2/WeatherDetails";
import AboutProject from "./page3/AboutProject";
import "./App.css";

function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API,
  });

  if (!isLoaded) return <div>Loading Map...</div>;
  if (loadError) return <div>Error Loading Maps</div>;
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<WeatherDetails />} />
        <Route path="/About" element={<AboutProject />} />
      </Routes>
    </>
  );
}

export default App;
