import { useState, useEffect } from "react";

import axiosInstance from "../../../api/config";
import { user } from "../../../api/routeUrl";
import { User } from "../../../interfaces/Entity/index";
import {
  Wrapper,
  UserInfo,
  ProfileImage,
  Name,
  TagList,
  Tag,
  Introduce,
  Email,
} from "../../../styles/Main/BannerStyle";

import { useRouter } from "next/router";

const Banner: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<User>({
    banner: { url: "" },
    profile: { url: "" },
    username: "",
    introduction: "",
    email: "",
    carrerFirst: "",
    carrerSecond: "",
  });

  const {
    banner,
    profile,
    username,
    carrerFirst,
    carrerSecond,
    introduction,
    email,
  } = userData;

  useEffect(() => {
    axiosInstance
      .get(user)
      .then((res) => setUserData(res.data.data))
      .catch(() => router.push("/sign-in"));
  }, []);

  return (
    <Wrapper img={banner?.url}>
      <UserInfo>
        <ProfileImage img={profile.url}></ProfileImage>
        <Name>{username}</Name>
        <TagList>
          <Tag>#{carrerFirst}</Tag>
          <Tag>#{carrerSecond}</Tag>
        </TagList>
        <Introduce>{introduction}</Introduce>
        <Email>{email}</Email>
      </UserInfo>
    </Wrapper>
  );
};

export default Banner;
