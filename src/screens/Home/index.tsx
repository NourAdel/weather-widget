import React from "react";
import Input from "../../components/CityInput";
import { HomeContainer } from "./styled";

const HomeScreen: React.FC = () => {
  return (
    <HomeContainer>
      <Input />
    </HomeContainer>
  );
};

export default HomeScreen;
