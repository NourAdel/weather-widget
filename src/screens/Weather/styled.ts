import styled from "styled-components";
import { InputField } from "../../components/CityInput/styled";

export const WeatherContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnotherCityInput = styled(InputField)`
  width: 10%;
  margin-bottom: 1.5rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: start;
  padding-inline-start: 2rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;
