import styled from "styled-components";
// import BlueSky from "../images/day-sunny.jpg";
// import RainyDay from "../../images/day-rain.jpg";
// import CloudyDay from "../../images/day-cloud.jpg";
// import NightSky from "../images/night-clear.jpg";
// import RainyNight from "../../images/night-rain.jpg";
// import CloudyNight from "../../images/night-cloud.jpg";

export const AppContainer = styled.div`
  background-image: url(${require("../images/day-sunny.jpg")});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.text_color};
  padding-top: 4rem;
`;

export const InputField = styled.input`
  width: 40%;
`;
