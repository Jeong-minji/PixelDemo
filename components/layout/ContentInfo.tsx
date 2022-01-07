import { useState, useEffect } from "react";
import axiosInstance from "../../api/config";
import { content } from "../../api/routeUri";
import * as Entity from "../../api/Entity/index";
import {
  Wrapper,
  ContentBox,
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
  BtnGoToStore,
} from "../../styles/Modal/ContentInfo";

interface ContentInfoI {
  contentId: string | string[] | undefined;
}

const ContentInfoModal: React.FC<ContentInfoI> = ({ contentId }) => {
  const [contentInfo, setContentInfo] = useState<Entity.Content>({});

  useEffect(() => {
    axiosInstance
      .get(`${content}/${contentId}`)
      .then((res) => setContentInfo(res.data.data));
  }, []);

  console.log(contentInfo);

  return (
    <Wrapper>
      <ContentBox>
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
            <Profile img={contentInfo.userinfo?.profile.url}></Profile>
            <Name>{contentInfo.userinfo?.username}</Name>
          </UserInfo>
          <Description>
            {contentInfo.content_file && contentInfo.content_file.description}
          </Description>
          <Column>
            <BtnQuestion onClick={() => alert("문의 준비중 입니다.")}>
              문의하기
            </BtnQuestion>
            <BtnOrder onClick={() => alert("구매 준비중 입니다.")}>
              구매하기
            </BtnOrder>
          </Column>
        </Information>
      </ContentBox>
      <BtnGoToStore>스토어로 돌아가기</BtnGoToStore>
    </Wrapper>
  );
};

export default ContentInfoModal;
