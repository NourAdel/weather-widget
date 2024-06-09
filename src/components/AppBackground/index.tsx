import { useWeather } from "../../hooks/useWeather";
import { AppContainer, ContentContainer } from "./styled";

const AppBackground = ({ children }: { children: React.ReactNode }) => {
  const { background } = useWeather();
  return (
    <AppContainer bg={background}>
      <ContentContainer bg={background}>{children}</ContentContainer>
    </AppContainer>
  );
};

export default AppBackground;
