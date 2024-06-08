import React, { ChangeEvent, useState } from "react";
import { InputField } from "../styledComponent.ts";



const Input  = () => {
    const [value, setValue] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputField placeholder="Search with city name.."  type="text" value={value} onChange={handleInputChange} />;
};

export default Input;
