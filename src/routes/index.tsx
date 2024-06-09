import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/Home";
import WeatherScreen from "../screens/Weather";
import ErrorScreen from "../screens/Error";

export const RootRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:city" element={<WeatherScreen />} />
        <Route path="/404" element={<ErrorScreen />} />
      </Routes>
    </Router>
  );
};
