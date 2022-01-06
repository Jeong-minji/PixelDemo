import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 21px;
  font-family: NotoSansB;
`;

export const FormTitle = styled.p`
  margin-top: 24px;
  font-size: 12px;
`;

export const LoginForm = styled.input`
  width: 360px;
  margin-top: 8px;
  padding: 10px 16px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.1);

  &::placeholder {
    font-size: 12px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

export const EmailForm = styled(LoginForm)``;

export const PasswordForm = styled(LoginForm)`
  margin-bottom: 20px;
`;

export const BtnLogin = styled.button<{ disabled: boolean }>`
  min-width: 230px;
  margin: 20px 0;
  padding: 12px;
  border: none;
  border-radius: 64px;
  font-size: 14px;
  font-family: NotoSansB;
  cursor: pointer;
  transition: all 0.1s ease;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(0, 0, 0, 0.1)" : "#00e07e"};
  color: ${({ disabled }) => (disabled ? "white" : "black")};
`;
