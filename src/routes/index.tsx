import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/Home";
import WeatherScreen from "../screens/Weather";

export const RootRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:city" element={<WeatherScreen />} />
      </Routes>
    </Router>
  );
};
