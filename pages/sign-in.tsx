import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import axiosInstance, { TOKEN } from "../features/api/config";
import { login } from "../features/api/routeUrl";

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

const Login: NextPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isLoginActive = email.includes("@") && password.length > 8;

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
        localStorage.setItem("token", res.data.jwt);
        window.location.replace("/");
      })
      .catch(() => alert("아이디 비밀번호를 확인해주세요."));
  };

  useEffect(() => {
    if (TOKEN) {
      alert("이미 로그인 한 유저입니다.");
      router.push("/");
    }
  }, [router]);

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
