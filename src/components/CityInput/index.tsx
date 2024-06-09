import { ChangeEvent, useState } from "react";
import { ErrorMessage, Flex, InputField, SearchButton, Title } from "./styled";
import { useWeather } from "../../hooks/useWeather";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const { error, setError, weather } = useWeather();
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/${city}`);
    }
  };
  return !weather ? (
    <>
      <Title>Check the weather in</Title>
      <div>
        <Flex>
          <InputField
            placeholder="enter city name"
            type="text"
            value={city}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setCity(e.target.value);
            }}
            onFocus={() => setError("")}
            error={!!error}
            onKeyDown={onKeyPress}
          />
          <SearchButton
            onClick={() => {
              navigate(`/${city}`);
            }}
          >
            search
          </SearchButton>
        </Flex>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </>
  ) : null;
};

export default Input;
