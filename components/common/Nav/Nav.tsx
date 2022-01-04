import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axiosInstance, { TOKEN } from "../../../api/config";
import { user } from "../../../api/routeUri";
import {
  Wrapper,
  Column,
  UserName,
  BtnLogin,
  BtnLogout,
} from "../../../styles/Main/NavStyle";

const Nav: React.FC = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<string>("");

  useEffect(() => {
    axiosInstance.get(user).then((res) => {
      setUserInfo(res.data.data.username);
    });
  }, []);

  const handleBtnLogin = () => {
    router.push("/sign-in");
  };

  const handleBtnLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Wrapper>
      <Column>
        <Image
          src="/images/symbol_logo.png"
          alt="logo"
          width={24}
          height={24}
        />
        <UserName>{userInfo}</UserName>
      </Column>
      {TOKEN ? (
        <BtnLogout onClick={handleBtnLogout}>로그아웃</BtnLogout>
      ) : (
        <BtnLogin onClick={handleBtnLogin}>로그인</BtnLogin>
      )}
    </Wrapper>
  );
};

export default Nav;
