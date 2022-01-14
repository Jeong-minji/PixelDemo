import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  min-height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const Btn = styled.button`
  min-width: 230px;
  margin: 20px 60px;
  padding: 12.5px;
  border: none;
  border-radius: 64px;
  font-size: 16px;
  font-family: NotoSansB;
  cursor: pointer;
`;

export const BtnGoToStore = styled(Btn)`
  background-color: rgba(0, 0, 0, 0.1);
`;
