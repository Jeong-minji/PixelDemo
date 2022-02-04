import { useGetUserQuery } from "../../../features/User/UserSlice";

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
  const user = useGetUserQuery().data?.data;

  return (
    <Wrapper img={user?.banner?.url}>
      <UserInfo>
        <ProfileImage
          src={user?.profile ? user.profile.url : "/images/default_profile.png"}
        />
        <Name>{user?.username}</Name>
        <TagList>
          {user?.carrerFirst ? <Tag>#{user.carrerFirst}</Tag> : null}
          {user?.carrerSecond ? <Tag>#{user?.carrerSecond}</Tag> : null}
        </TagList>
        <Introduce>{user?.introduction}</Introduce>
        <Email>{user?.email}</Email>
      </UserInfo>
    </Wrapper>
  );
};

export default Banner;
