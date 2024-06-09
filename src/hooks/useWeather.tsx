import React, { ReactNode, createContext, useContext, useState } from "react";
import { IWeather } from "../types";
import { apiClient } from "../apis/apiClient";
import { getBackgroundFromWeather } from "../utils/getBackgroundFromWeather";

interface WeatherContextProps {
  weather: IWeather | null;
  setWeather: (weather: IWeather) => void;
  unit: "metric" | "imperial";
  setUnit: (unit: "metric" | "imperial") => void;
  city: string;
  setCity: (city: string) => void;
  error: string;
  setError: (error: string) => void;
  background: string;
  fetchWeather: () => void;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

export const useWeather = (): WeatherContextProps => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error("useSetsContext must be used within a WeatherProvider");
  }

  return context;
};

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [city, setCity] = useState<string>("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [error, setError] = useState<string>("");
  const [background, setBackground] = useState<string>("");

  const fetchWeather = async () => {
    try {
      const response = await apiClient.get(
        `weather?q=${city}&units=metric&APPID=fba9dbcc5bc2744513b5eb2ba363b782`
      );
      setWeather(response.data);
      setBackground(getBackgroundFromWeather(response.data));
    } catch (error) {
      setError("City not found");
    }
  };

  const contextValue: WeatherContextProps = {
    weather,
    setWeather,
    city,
    setCity,
    unit,
    setUnit,
    error,
    setError,
    background,
    fetchWeather,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
