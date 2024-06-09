import React from "react";
import { HomeContainer } from "../Home/styled";
import { ContentContainer, HomeButton } from "./styled";
import { Title } from "../../components/CityInput/styled";

const ErrorScreen: React.FC = () => {
  return (
    <HomeContainer>
      <ContentContainer>
        <Title>City not found</Title>

        <HomeButton to="/">Go back</HomeButton>
      </ContentContainer>
    </HomeContainer>
  );
};

export default ErrorScreen;
