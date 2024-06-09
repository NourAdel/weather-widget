import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AppBackground from "../../components/AppBackground";
import WeatherDetailsCard from "../../components/WeatherDetailsCard";
import { useWeather } from "../../hooks/useWeather";

const WeatherScreen: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const { fetchWeather, unit } = useWeather();

  useEffect(() => {
    if (city) {
      fetchWeather(city.replace(/-/g, " "));
    }
  }, [city, unit]);

  return (
    <AppBackground>
      <WeatherDetailsCard />
    </AppBackground>
  );
};

export default WeatherScreen;
