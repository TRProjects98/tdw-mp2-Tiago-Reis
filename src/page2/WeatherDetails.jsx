import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToogleBanner } from "../services/store";
import styled from "styled-components";

const DetailsSectionContainer = styled.section`
  background-color: #a2bffe;
  height: 100vh;
  padding: 30px;
`;

const WdetailDataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const WeatherDayDataContainer = styled.div`
  background-color: #163372;
  color: white;
  text-align: center;
  margin-top: 30px;
  border-radius: 25px;
  min-width: 200px;
  padding: 15px;
`;

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
      <DetailsSectionContainer>
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
        <WdetailDataContainer>
          {DayData.map((element, index) => (
            <WeatherDayDataContainer key={`weatherHour_${index}`}>
              <h1>{element.weather[0].main}</h1>
              <p>{element.dt_txt.split(" ")[1]}</p>
              <img
                src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                alt={element.weather[0].description}
              />
              <h3>{element.weather[0].description}</h3>
            </WeatherDayDataContainer>
          ))}
        </WdetailDataContainer>
      </DetailsSectionContainer>
    </>
  );
}

export default WeatherDetails;
