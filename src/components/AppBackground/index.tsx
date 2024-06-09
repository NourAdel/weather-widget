import { useWeather } from "../../hooks/useWeather";
import { AppContainer } from "./styled";

const AppBackground = ({ children }: { children: React.ReactNode }) => {
  const { background } = useWeather();
  return <AppContainer bg={background}>{children}</AppContainer>;
};

export default AppBackground;
