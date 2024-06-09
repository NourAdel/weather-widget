import { useWeather } from "../../hooks/useWeather";
import {
  CardContainer,
  CardHeader,
  CardIcon,
  CardIconContainer,
  FlexColumn,
  FlexRow,
  FlexRowCenter,
  Subheader,
  Subtitle,
  UnitsButton,
  UnitsContainer,
  Value,
  ValueSpan,
} from "./styled";
import TempIcon from "../../images/icons/temp.svg";
import HumidityIcon from "../../images/icons/humidity.svg";
import WindIcon from "../../images/icons/wind-speed.svg";
import VisibilityIcon from "../../images/icons/visibility.svg";
import FeelsLikeIcon from "../../images/icons/feels-like.svg";

const WeatherDetailsCard = () => {
  const { weather, unit, setUnit } = useWeather();
  return weather ? (
    <CardContainer>
      <CardHeader>
        <CardIconContainer>
          <CardIcon
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </CardIconContainer>

        <h2>{weather.name}</h2>
      </CardHeader>
      <Subheader>
        <Subtitle>{weather.weather[0].description} </Subtitle>

        <Subtitle>
          <img src={TempIcon} alt="temperature-icon" width={20} height={20} />
          {weather.main.temp} {unit === "imperial" ? "˚ F" : "˚ C"}
        </Subtitle>
      </Subheader>
      <FlexRow>
        <FlexColumn>
          <FlexRowCenter>
            <img src={WindIcon} alt="temperature-icon" width={16} height={20} />
            <p>Wind speed</p>
          </FlexRowCenter>
          <Value>
            {weather.wind.speed}{" "}
            <ValueSpan>{unit === "imperial" ? "mph" : "kph"}</ValueSpan>
          </Value>
        </FlexColumn>

        <FlexColumn>
          <FlexRowCenter>
            <img
              src={HumidityIcon}
              alt="humidity-icon"
              width={16}
              height={20}
            />
            <p>Humidity</p>
          </FlexRowCenter>
          <Value>
            {weather.main.humidity} <ValueSpan>%</ValueSpan>
          </Value>
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        <FlexColumn>
          <FlexRowCenter>
            <img
              src={VisibilityIcon}
              alt="visibility-icon"
              width={16}
              height={20}
            />
            <p>Visibility</p>
          </FlexRowCenter>
          <Value>
            {weather.visibility / 100}
            <ValueSpan> KM</ValueSpan>
          </Value>
        </FlexColumn>

        <FlexColumn>
          <FlexRowCenter>
            <img
              src={FeelsLikeIcon}
              alt="feels-like-icon"
              width={16}
              height={20}
            />
            <p>Feels like</p>
          </FlexRowCenter>
          <Value>
            {weather.main.feels_like}{" "}
            <ValueSpan>{unit === "imperial" ? "˚ F" : "˚ C"}</ValueSpan>
          </Value>
        </FlexColumn>
      </FlexRow>
      <UnitsContainer>
        <UnitsButton
          right={false}
          selected={unit === "metric"}
          onClick={() => setUnit("metric")}
        >
          Metric
        </UnitsButton>
        <UnitsButton
          right={true}
          selected={unit === "imperial"}
          onClick={() => setUnit("imperial")}
        >
          Imperial
        </UnitsButton>
      </UnitsContainer>
    </CardContainer>
  ) : null;
};

export default WeatherDetailsCard;
