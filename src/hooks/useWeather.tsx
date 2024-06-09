import React, { ReactNode, createContext, useContext, useState } from "react";
import { IWeather } from "../types";

interface WeatherContextProps {
  weather: IWeather | null;
  setWeather: (weather: IWeather) => void;
  unit: "metric" | "imperial";
  setUnit: (unit: "metric" | "imperial") => void;
  background: string;
  setBackground: (background: string) => void;
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
  const [unit, setUnit] = useState<"metric" | "imperial">("imperial");
  const [background, setBackground] = useState<string>("");

  const contextValue: WeatherContextProps = {
    weather,
    setWeather,
    unit,
    setUnit,
    background,
    setBackground,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
