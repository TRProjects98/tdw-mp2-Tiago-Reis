import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToogleBanner } from "../services/store";

function WeatherDetails() {
  let { state } = useLocation();

  const dispatch = useDispatch();

  const WeatherData = useSelector((state) => state.weather.WeatherData);
  const Location = useSelector((state) => state.weather.Location);

  const DayData = [];

  WeatherData.list.forEach((element) => {
    if (element.dt_txt.split(" ")[0] === state) {
      DayData.push(element);
    }
  });

  console.log(DayData);
  return (
    <>
      <section className="DetailsSection">
        <h1>
          {Location} ({state})
        </h1>
        <Link
          to="/"
          onClick={() => {
            dispatch(ToogleBanner());
          }}
        >
          <p>Back home</p>
        </Link>
        <div className="WdetailData">
          {DayData.map((element, index) => (
            <div className="WeatherDayData" key={`weatherHour_${index}`}>
              <h1>{element.weather[0].main}</h1>
              <p>{element.dt_txt.split(" ")[1]}</p>
              <img
                src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                alt={element.weather[0].description}
              />
              <h3>{element.weather[0].description}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default WeatherDetails;
