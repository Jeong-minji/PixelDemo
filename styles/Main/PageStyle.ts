import styled from "styled-components";

export const Wrapper = styled.div<{ focus: boolean }>`
  width: 20px;
  margin: 0 8px;
  cursor: pointer;
  text-align: center;
  transition: all 0.1s ease;
  color: ${({ focus }) => (focus ? "#00e07e" : "black")};

  &:hover {
    color: #00e07e;
  }
`;
