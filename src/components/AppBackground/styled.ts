import styled from "styled-components";
import { Backgrounds } from "../../constants";

export const AppContainer = styled.div<{ bg: string }>`
  ${(props) => {
    switch (props.bg) {
      case Backgrounds.day_clear:
        return `background-image: url(${require("../../images/day-sunny.jpg")})`;
      case Backgrounds.day_rain:
        return `background-image: url(${require("../../images/day-rain.jpg")})`;
      case Backgrounds.day_cloud:
        return `background-image: url(${require("../../images/day-cloud.jpg")})`;
      case Backgrounds.day_snow:
        return `background-image: url(${require("../../images/day-snow.jpg")})`;
      case Backgrounds.thunder:
        return `background-image: url(${require("../../images/thunder.jpg")})`;
      case Backgrounds.night_clear:
        return `background-image: url(${require("../../images/night-clear.jpg")})`;
      case Backgrounds.night_rain:
        return `background-image: url(${require("../../images/night-rain.jpg")})`;
      case Backgrounds.night_cloud:
        return `background-image: url(${require("../../images/night-cloud.jpg")})`;
      case Backgrounds.night_snow:
        return `background-image: url(${require("../../images/night-snow.jpg")})`;
      default:
        return `background-image: url(${require("../../images/background.png")})`;
    }
  }};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
  transition: background-image 1s ease-in-out;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.text_color};
  padding-top: 2rem;
`;
