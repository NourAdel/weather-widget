import { CSSProperties, ChangeEvent, useEffect, useState } from "react";
import { Flex, InputField, SearchButton, Title } from "./styled";
import { useNavigate } from "react-router-dom";

const Input = ({
  title = true,
  style,
}: {
  title?: boolean;
  style?: CSSProperties;
}) => {
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
      </div>
    </div>
  );
};

export default Input;
