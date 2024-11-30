import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapComponent = () => (
  <LoadScript googleMapsApiKey={import.meta.env.VITE_MAPS_API}>
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Add markers, overlays, etc. */}
    </GoogleMap>
  </LoadScript>
);

export default MapComponent;
