import styled from "styled-components";

export const HomeContainer = styled.div`
  background-image: url(${require("../../images/background.png")});
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
  padding-top: 6rem;
`;
