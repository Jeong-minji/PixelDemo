import { useState } from "react";
import axiosInstance from "../api/config";
import { login } from "../api/routeUri";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Wrapper,
  LoginBox,
  Logo,
  Title,
  FormTitle,
  EmailForm,
  PasswordForm,
  BtnLogin,
} from "../styles/Signin/SigninStyle";
import { useCookies } from "react-cookie";

const Login: NextPage = () => {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["token"]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleBtnLogin = () => {
    const account = {
      identifier: email,
      password: password,
    };

    axiosInstance
      .post(login, account)
      .then((res) => {
        setCookie("token", res.data.jwt, { path: "/" });
        router.push("/");
      })
      .catch(() => alert("아이디 비밀번호를 확인해주세요."));
  };

  const isLoginActive = email.includes("@") && password.length > 8;

  return (
    <Wrapper>
      <LoginBox>
        <Logo>
          <Image
            src="/images/typo_logo.png"
            alt="logo"
            width={160}
            height={40}
          />
        </Logo>
        <Title>로그인</Title>
        <FormTitle>Email</FormTitle>
        <EmailForm
          placeholder="아이디를 입력해주세요. (email)"
          onChange={handleEmail}
        />
        <FormTitle>Password</FormTitle>
        <PasswordForm
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={handlePassword}
        />
        <BtnLogin onClick={handleBtnLogin} disabled={!isLoginActive}>
          로그인
        </BtnLogin>
      </LoginBox>
    </Wrapper>
  );
};

export default Login;
