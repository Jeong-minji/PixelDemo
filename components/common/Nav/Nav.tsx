import Image from "next/image";

import { useGetUserQuery } from "../../../features/User/UserSlice";
import {
  Wrapper,
  Column,
  UserName,
  BtnLogout,
} from "../../../styles/Main/NavStyle";

const Nav: React.FC = () => {
  const { data } = useGetUserQuery();

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
        <UserName>{data?.data.username}</UserName>
      </Column>
      <BtnLogout onClick={handleBtnLogout}>로그아웃</BtnLogout>
    </Wrapper>
  );
};

export default Nav;
