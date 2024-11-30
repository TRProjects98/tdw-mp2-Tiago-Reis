import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page1/Homepage";
import WheatherDetails from "./page2/WheatherDetails";
import { useJsApiLoader } from "@react-google-maps/api";

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
        <Route path="/:id" element={<WheatherDetails />} />
      </Routes>
    </>
  );
}

export default App;
