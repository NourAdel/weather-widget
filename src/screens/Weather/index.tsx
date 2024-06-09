import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppBackground from "../../components/AppBackground";
import WeatherDetailsCard from "../../components/WeatherDetailsCard";
import { useWeather } from "../../hooks/useWeather";
import { getWeather } from "../../apis";
import { getBackgroundFromWeather } from "../../utils/getBackgroundFromWeather";
import { HomeButton } from "../Error/styled";
import { ButtonContainer, WeatherContainer } from "./styled";
import HomeIcon from "../../images/icons/home.svg";

const WeatherScreen: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const { unit, setWeather, setBackground } = useWeather();
  const navigate = useNavigate();

  const fetchWeather = async () => {
    try {
      const response = await getWeather(city?.replace(/-/g, " ") || "", unit);
      setWeather(response);
      setBackground(getBackgroundFromWeather(response));
    } catch (error) {
      navigate("/404");
    }
  };
  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city, unit]);

  return (
    <AppBackground>
      <WeatherContainer>
        <ButtonContainer>
          <HomeButton to="/">
            <img src={HomeIcon} alt="home" width={30} height={30} />
          </HomeButton>
        </ButtonContainer>
        <WeatherDetailsCard />
      </WeatherContainer>
    </AppBackground>
  );
};

export default WeatherScreen;
