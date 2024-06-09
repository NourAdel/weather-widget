import { ChangeEvent } from "react";
import { ErrorMessage, Flex, InputField, SearchButton, Title } from "./styled";
import { useWeather } from "../../hooks/useWeather";

const Input = () => {
  const { city, setCity, error, setError, weather, fetchWeather } =
    useWeather();

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchWeather();
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
          <SearchButton onClick={fetchWeather}>search</SearchButton>
        </Flex>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </>
  ) : null;
};

export default Input;
