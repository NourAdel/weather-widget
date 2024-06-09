import { CSSProperties, ChangeEvent, useEffect, useState } from "react";
import { ErrorMessage, Flex, InputField, SearchButton, Title } from "./styled";
import { useWeather } from "../../hooks/useWeather";
import { useNavigate } from "react-router-dom";

const Input = ({
  title = true,
  style,
}: {
  title?: boolean;
  style?: CSSProperties;
}) => {
  const { error, setError } = useWeather();
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCity("");
  }, [navigate]);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/${city.replace(/ /g, "-")}`);
    }
  };
  return (
    <div style={style}>
      {title && <Title>Check the weather in</Title>}

      <div>
        <Flex>
          <InputField
            placeholder={"Enter city name"}
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
              navigate(`/${city.replace(/ /g, "-")}`);
            }}
          >
            Search
          </SearchButton>
        </Flex>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </div>
  );
};

export default Input;
