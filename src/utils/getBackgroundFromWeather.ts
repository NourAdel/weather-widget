import { IWeather } from "../types";

export const getBackgroundFromWeather = (weather: IWeather) => {
  const dayPeriod: "day" | "night" = weather.weather[0].icon.includes("d")
    ? "day"
    : "night";
  const id = weather.weather[0].id.toString().charAt(0);
  const weatherType =
    id === "2"
      ? "thunder"
      : id === "3" || id === "5"
      ? "rain"
      : id === "6"
      ? "snow"
      : id === "7" || weather.weather[0].id.toString() === "800"
      ? "clear"
      : "cloud";

  const imgName =
    weatherType === "thunder" ? "thunder" : `${dayPeriod}-${weatherType}`;

  return imgName;
};
