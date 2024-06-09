import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HomeButton = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => props.theme.button_primary};
  color: ${(props) => props.theme.input_color};
  border: none;
  border-radius: 1rem;
  padding: 10px 20px;
  font-size: 1rem;
  font-family: "Ubuntu";
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.button_secondary};
  }
`;
