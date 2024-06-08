import { ChangeEvent } from "react";
import { ErrorMessage, InputField } from "../styledComponent.ts";
import { useWeather } from "../hooks/useWeather";

const Input = () => {
  const { city, setCity, error, setError } = useWeather();

  return (
    <>
      <InputField
        placeholder="Search with city name.."
        type="text"
        value={city}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setCity(e.target.value);
        }}
        onFocus={() => setError("")}
        error={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default Input;
