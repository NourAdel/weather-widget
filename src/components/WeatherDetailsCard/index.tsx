import { useWeather } from "../../hooks/useWeather";

const WeatherDetailsCard = () => {
  const { weather } = useWeather();
  return weather ? (
    <div>
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].main} </p>
      <p>{weather.weather[0].description} </p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>Temperature: {weather.main.temp} </p>
      <p>Feels like: {weather.main.feels_like} </p>
      <p>humidity: {weather.main.humidity}</p>
      <p>Wind speed: {weather.wind.speed}</p>
    </div>
  ) : null;
};

export default WeatherDetailsCard;
