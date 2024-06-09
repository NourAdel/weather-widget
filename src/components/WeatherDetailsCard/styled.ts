import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  padding: 1rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.input_color};
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 300px;
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
`;

export const CardIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const CardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
  padding: 0px;
  background-color: rgba(137, 148, 153, 0.3);
`;

export const Subheader = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h4`
  display: flex;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
  margin-block: 1rem;
`;
export const FlexRowCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.5rem;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: fit-content;
  width: 90px;
`;
export const Value = styled.p`
  margin-block: 0;
  font-size: 1.5rem;
`;

export const ValueSpan = styled.span`
  font-size: 0.75rem;
`;

export const UnitsContainer = styled.div`
  display: flex;
  position: sticky;
  bottom: 0;
  width: 100%;
  justify-content: center;
  border-radius: 0.5;
  margin-top: 3rem;
`;

export const UnitsButton = styled.button<{ selected: boolean; right: boolean }>`
  background-color: ${(props) =>
    props.selected ? props.theme.input_color : "rgba(137, 148, 153, 0.3)"};
  color: ${(props) =>
    props.selected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.8)"};
  border: none;
  padding: 0.5rem;

  border-top-right-radius: ${(props) => (props.right ? "0.5rem" : "0")};
  border-top-left-radius: ${(props) => (!props.right ? "0.5rem" : "0")};
  border-bottom-right-radius: ${(props) => (props.right ? "0.5rem" : "0")};
  border-bottom-left-radius: ${(props) => (!props.right ? "0.5rem" : "0")};

  font-size: 1rem;
  width: 30%;
  min-width: 60px;
  cursor: pointer;
  transition: background-color 0.3s linear;
`;
