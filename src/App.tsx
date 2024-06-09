import AppBackground from "./components/AppBackground";
import Input from "./components/CityInput";
import WeatherDetailsCard from "./components/WeatherDetailsCard";

function App() {
  return (
    <AppBackground>
      <Input />
      <WeatherDetailsCard />
    </AppBackground>
  );
}

export default App;
