import styled from "styled-components";
import Image from "next/image";

const ContentInfoModal: React.FC = () => {
  return (
    <Wrapper>
      <Thumbnail>{/* <Image /> */}</Thumbnail>
      <Information>
        <Column>
          <Price>30,000 P</Price>
          <Popularity>
            <Views>1.2K 뷰</Views>
            <Likes>205 찜</Likes>
          </Popularity>
        </Column>
        <Title>
          Content Title : Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Etiam vel.
        </Title>
        <HashTagList>
          <Tag># 포토샵</Tag>
          <Tag># 클립스튜디오</Tag>
          <Tag># 스케치업</Tag>
        </HashTagList>
        <UserInfo>
          <Profile>{/* <Image /> */}</Profile>
          <Name>Nickname</Name>
        </UserInfo>
        <Description>
          Content Description : Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Description>
        <Column>
          <BtnQuestion>문의하기</BtnQuestion>
          <BtnOrder>구매하기</BtnOrder>
        </Column>
      </Information>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-all;
`;

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  font-family: NotoSansB;
`;

const Price = styled.span`
  font-size: 14px;
`;

const Popularity = styled.div`
  display: flex;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

const Views = styled.span``;

const Likes = styled.span`
  margin-left: 10px; ;
`;

const Title = styled.h1`
  margin: 16px 0;
  line-height: 1.4em;
  font-size: 16px;
  font-family: NotoSansB;
`;

const HashTagList = styled.ul`
  display: flex;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
`;

const Tag = styled.li`
  margin-right: 10px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

const Profile = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Name = styled.span`
  margin-left: 10px;
  font-size: 12px;
  font-family: NotoSansB;
  cursor: pointer;
`;

const Description = styled.p`
  margin-top: 20px;
  line-height: 1.6em;
  font-size: 12px;
`;

const Btn = styled.button`
  min-width: 230px;
  padding: 12.5px;
  border: none;
  border-radius: 64px;
  font-size: 16px;
  font-family: NotoSansB;
  cursor: pointer;
`;

const BtnQuestion = styled(Btn)`
  background-color: rgba(0, 0, 0, 0.1);
`;

const BtnOrder = styled(Btn)`
  background-color: #00e07e;
`;

export default ContentInfoModal;
