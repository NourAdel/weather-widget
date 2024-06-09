import { apiClient } from "./apiClient";

export const getWeather = async (city: string, unit: string) => {
  const response = await apiClient.get(
    `weather?q=${city}&units=${unit}&APPID=fba9dbcc5bc2744513b5eb2ba363b782`
  );
  return response.data;
};
