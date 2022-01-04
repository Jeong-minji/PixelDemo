import styled from "styled-components";

export const Wrapper = styled.div<{ focus: boolean }>`
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.1s ease;
  color: ${({ focus }) => (focus ? "#00e07e" : "black")};

  &:hover {
    color: #00e07e;
  }
`;
