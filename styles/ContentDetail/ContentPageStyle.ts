import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  min-width: 230px;
  padding: 12.5px;
  border: none;
  border-radius: 64px;
  font-size: 16px;
  font-family: NotoSansB;
  cursor: pointer;
`;

export const BtnGoToStore = styled(Btn)`
  position: absolute;
  right: 80px;
  bottom: 30px;
  background-color: rgba(0, 0, 0, 0.1);
`;
