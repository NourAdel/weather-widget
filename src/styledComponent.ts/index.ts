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
  height: 100vh;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  backdrop-filter: blur(5px);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.text_color};
  padding-top: 6rem;
`;
export const ErrorMessage = styled.p`
  display: none;
  color: ${(props) => props.theme.text_error};
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  font-family: "Ubuntu";
  font-weight: 500;
  text-align: left;
  width: 30%;
`;

export const InputField = styled.input<{ error: boolean }>`
  outline: none;
  border: none;
  width: 30%;
  height: 40px;
  padding: 10px 14px;
  box-sizing: border-box;
  border-radius: 1rem;
  min-width: 200px;
  font-size: 1rem;
  font-family: "Ubuntu";
  color: ${(props) => props.theme.input_color};
  ::placeholder {
    color: ${(props) => props.theme.placeholder_color};
  }
  &:focus {
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05),
      0px 0px 0px 4px rgba(158, 119, 237, 0.24);
  }

  ${(props) =>
    props.error &&
    `
    border: 1px solid ${props.theme.border_error};
    ~ ${ErrorMessage} {
      display: block;

    }
  `};
`;
