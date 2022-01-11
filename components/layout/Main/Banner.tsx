import { useState, useEffect } from "react";
import axiosInstance, { TOKEN } from "../../../api/config";
import { user } from "../../../api/routeUri";
import * as Entity from "../../../api/Entity/index";
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

const Banner: React.FC = () => {
  const [userData, setUserData] = useState<Entity.User>({
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
    axiosInstance.get(user).then((res) => setUserData(res.data.data));
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
