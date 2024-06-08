import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IWeather } from "../types";
import { apiClient } from "../apis/apiClient";

interface WeatherContextProps {
  weather: IWeather | null;
  setWeather: (weather: IWeather) => void;
  unit: "metric" | "imperial";
  setUnit: (unit: "metric" | "imperial") => void;
  city: string;
  setCity: (city: string) => void;
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

  const fetchWeather = async () => {
    if (city) {
      try {
        const response = await apiClient.get(
          `weather?q=${city}&units=metric&APPID=816f698aa8247668420fa9b43dfd7871`
        );
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city]);

  const contextValue: WeatherContextProps = {
    weather,
    setWeather,
    city,
    setCity,
    unit,
    setUnit,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
