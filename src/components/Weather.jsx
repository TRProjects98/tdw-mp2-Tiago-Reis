import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToogleBanner } from "../services/store";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WeatherBannerContainer = styled.div`
  padding: 20px;
  border-radius: 25px;
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 100000;
  background-color: #a2bffe;
  color: white;
  transform: translate(-50%, -10%);
  display: ${(props) => (props.BannerDisplay ? "block" : "none")};
`;

const BannerHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3:last-child:hover {
    cursor: pointer;
  }
`;

const WeatherIconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

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
    <WeatherBannerContainer BannerDisplay={BannerDisplay}>
      <BannerHeaderContainer>
        <h3>Location: {Location}</h3>
        <h3 onClick={() => dispatch(ToogleBanner())}>X</h3>
      </BannerHeaderContainer>
      <WeatherIconsContainer>
        {WeatherArray.map((element, index) => (
          <Link
            key={`weatherLink_${index}`}
            state={element.dt_txt.split(" ")[0]}
            to={`/${element.dt_txt.split(" ")[0]}`}
          >
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                alt={element.weather[0].description}
              />
              <p>{element.dt_txt.split(" ")[0]}</p>
            </div>
          </Link>
        ))}
      </WeatherIconsContainer>
    </WeatherBannerContainer>
  );
}

export default Weather;
