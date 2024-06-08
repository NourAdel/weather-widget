import { ThemeProvider } from "styled-components";
import { AppContainer, ContentContainer } from "./styledComponent.ts";
import { theme } from "./styledComponent.ts/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <ContentContainer>Weather!</ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
