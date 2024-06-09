import styled from "styled-components";

export const InputField = styled.input`
  outline: none;
  border: none;
  width: 30%;
  height: 40px;
  padding: 10px 14px;
  box-sizing: border-box;
  border-radius: 1rem;
  min-width: 200px;
  font-size: 1rem;
  font-family: "Ubuntu";

  color: ${(props) => props.theme.input_color};

  ::placeholder {
    color: ${(props) => props.theme.placeholder_color};
    font-weight: 200;
  }

  &:focus {
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05),
      0px 0px 0px 4px rgba(105, 105, 105, 0.24);
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title_color};
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const SearchButton = styled.button`
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
