import { GoogleMap, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import {
  Add_Coordinates,
  ToogleBanner,
  Add_Location,
  Add_Data,
} from "../services/store";
import { useState, useEffect } from "react";
import { useGetFiveDaysWeatherDataQuery } from "../services/weather";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = { lat: 40.6412, lng: -8.65362 };

function MapComponent() {
  const dispatch = useDispatch();
  const { lat: Latitude, long: Longitude } = useSelector(
    (state) => state.weather
  );
  const BannerDisplay = useSelector((state) => state.weather.showBanner);

  const [markerPosition, setMarkerPosition] = useState(null);
  const [cursorStyle, setCursorStyle] = useState("grab");

  const { data: weatherData, refetch } = useGetFiveDaysWeatherDataQuery({
    lat: Latitude,
    long: Longitude,
  });

  useEffect(() => {
    if (weatherData) {
      dispatch(Add_Data(weatherData));
    }
  }, [weatherData, dispatch]);

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setMarkerPosition({ lat, lng });

    reverseGeocode(lat, lng);

    setCursorStyle("pointer");

    dispatch(Add_Coordinates(Object({ lat, lng })));

    if (!BannerDisplay) {
      dispatch(ToogleBanner());
    }

    refetch();
  };

  const reverseGeocode = (lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();
    const latLng = { lat, lng };

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK" && results[0]) {
        let local;

        if (results[0].address_components[2].long_name === undefined) {
          local = results[0].formatted_address;
        } else {
          local = results[0].address_components[2].long_name;
        }

        const country = results[0].address_components[6].long_name;
        let Location;

        if (country === undefined) {
          Location = local;
        } else {
          Location = `${local} - ${country}`;
        }

        dispatch(Add_Location(String(Location)));
      } else {
        console.error("Reverse Geocoding failed: ", status);
      }
    });
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onClick={handleMapClick}
      options={{
        gestureHandling: "greedy",
        draggableCursor: cursorStyle,
      }}
      onDragStart={() => setCursorStyle("grab")}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  );
}

export default MapComponent;
