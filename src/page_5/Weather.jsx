import { useGetFiveDaysWeatherDataQuery } from "../services/weather";

function Weather() {
  const { data, error, isLoading } = useGetFiveDaysWeatherDataQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const WeatherArray = [];
  let date = "";

  data.list.forEach((element) => {
    const day = element.dt_txt.split(" ")[0];
    if (day !== date) {
      WeatherArray.push(element);
      date = day;
    }
  });

  return (
    <>
      {WeatherArray.map((element, index) => {
        return (
          <img
            key={`weatherImg_${index}`}
            src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
            alt={element.weather[0].description}
          />
        );
      })}
    </>
  );
}

export default Weather;
