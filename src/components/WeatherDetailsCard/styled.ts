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
`;

export const CardHeader = styled.div`
  display: flex;
  gap: -1rem;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const CardIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const Subheader = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h5`
  margin-block: 0;
  display: flex;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-block: 1rem;
`;
export const FlexRowCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.5rem;
  align-self: flex-end;
  margin-inline-start: 0.3rem;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: fit-content;
`;
export const Value = styled.p`
  margin-block: 0;
  font-size: 1.5rem;
`;

export const ValueSpan = styled.span`
  font-size: 0.75rem;
`;
