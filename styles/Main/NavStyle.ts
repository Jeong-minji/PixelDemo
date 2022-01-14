import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 40px;
  top: 0;
  background-color: white;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  margin-left: 16px;
  font-size: 20px;
  color: #008857;
  font-family: NotoSansB;
`;

export const BtnLogout = styled.button`
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #008857;
  border-radius: 64px;
  border: 2px solid #008857;
  background-color: white;
  cursor: pointer;
`;
