import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToogleBanner } from "../services/store";
import { Link } from "react-router-dom";

function Weather() {
  const dispatch = useDispatch();
  const Location = useSelector((state) => state.weather.Location);
  const WeatherData = useSelector((state) => state.weather.WeatherData);
  const BannerDisplay = useSelector((state) => state.weather.showBanner);

  if (!WeatherData) return <p>Loading weather data...</p>;

  const WeatherArray = [];
  let date = "";

  WeatherData.list.forEach((element) => {
    const day = element.dt_txt.split(" ")[0];
    if (day !== date) {
      WeatherArray.push(element);
      date = day;
    }
  });

  return (
    <div
      className="WeatherBanner"
      style={{ display: BannerDisplay ? "block" : "none" }}
    >
      <div className="BannerHeader">
        <h3>Location: {Location}</h3>
        <h3 onClick={() => dispatch(ToogleBanner())}>X</h3>
      </div>
      <div className="WeatherIcons">
        {WeatherArray.map((element, index) => (
          <Link
            key={`weatherLink_${index}`}
            state={element.dt_txt.split(" ")[0]}
            to={`/${element.dt_txt.split(" ")[0]}`}
          >
            <div className="WeatherData">
              <img
                src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                alt={element.weather[0].description}
              />
              <p>{element.dt_txt.split(" ")[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Weather;
