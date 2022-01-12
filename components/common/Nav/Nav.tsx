import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import axiosInstance from "../../../api/config";
import { user } from "../../../api/routeUrl";
import {
  Wrapper,
  Column,
  UserName,
  BtnLogout,
} from "../../../styles/Main/NavStyle";

const Nav: React.FC = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<string>("");

  useEffect(() => {
    axiosInstance
      .get(user)
      .then((res) => {
        setUserInfo(res.data.data.username);
      })
      .catch(() => router.push("/sign-in"));
  }, []);

  const handleBtnLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/sign-in");
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
      <BtnLogout onClick={handleBtnLogout}>로그아웃</BtnLogout>
    </Wrapper>
  );
};

export default Nav;
