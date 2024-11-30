import MapComponent from "../components/Map";
import Weather from "../components/Weather";
import AboutBtn from "../components/AboutBtn";

function Homepage() {
  return (
    <>
      <AboutBtn />
      <Weather />
      <MapComponent />
    </>
  );
}

export default Homepage;
