import { useState, useEffect } from "react";
import Image from "next/image";
import axiosInstance from "../../api/config";
import { content } from "../../api/routeUri";
import * as Entity from "../../api/Entity/index";
import {
  Wrapper,
  Thumbnail,
  Information,
  Column,
  Price,
  Popularity,
  Views,
  Likes,
  Title,
  HashTagList,
  Tag,
  UserInfo,
  Profile,
  Name,
  Description,
  BtnQuestion,
  BtnOrder,
} from "../../styles/Modal/ContentInfoModal";

const contentID = "5fe2fe3ec8c2dd00137f5d0b";

const ContentInfoModal: React.FC = () => {
  const [contentInfo, setContentInfo] = useState<Entity.Content>({});

  useEffect(() => {
    axiosInstance
      .get(`${content}/${contentID}`)
      .then((res) => setContentInfo(res.data.data));
  }, []);

  console.log(contentInfo);

  return (
    <Wrapper>
      <Thumbnail
        img1={contentInfo.images && contentInfo.images[0].url}
        img2={contentInfo.images && contentInfo.images[1].url}
      ></Thumbnail>
      <Information>
        <Column>
          <Price>30,000 P</Price>
          <Popularity>
            <Views>{contentInfo.view} 뷰</Views>
            <Likes>{contentInfo.interest} 찜</Likes>
          </Popularity>
        </Column>
        <Title>{contentInfo.title}</Title>
        <HashTagList>
          {contentInfo.tags &&
            contentInfo.tags.map((item) => {
              return <Tag key={item.id}>#&nbsp;{item.text}</Tag>;
            })}
        </HashTagList>
        <UserInfo>
          <Profile>{/* <Image /> */}</Profile>
          <Name>{contentInfo.userinfo?.username}</Name>
        </UserInfo>
        <Description>
          {contentInfo.content_file && contentInfo.content_file.description}
        </Description>
        <Column>
          <BtnQuestion>문의하기</BtnQuestion>
          <BtnOrder>구매하기</BtnOrder>
        </Column>
      </Information>
    </Wrapper>
  );
};

export default ContentInfoModal;
