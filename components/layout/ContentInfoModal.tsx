import styled from "styled-components";
import Image from "next/image";

const ContentInfoModal: React.FC = () => {
  return (
    <Wrapper>
      <Thumbnail>
        {/* <Image /> */}
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
          <Description>blahblahblah</Description>
          <Column>
            <BtnQuestion>문의하기</BtnQuestion>
            <BtnOrder>구매하기</BtnOrder>
          </Column>
        </Information>
      </Thumbnail>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Thumbnail = styled.div``;

const Information = styled.div``;

const Column = styled.div``;

const Price = styled.span``;

const Popularity = styled.div``;

const Views = styled.span``;

const Likes = styled.span``;

const Title = styled.h1``;

const HashTagList = styled.ul``;

const Tag = styled.li``;

const UserInfo = styled.div``;

const Profile = styled.div``;

const Name = styled.span``;

const Description = styled.p``;

const BtnQuestion = styled.button``;

const BtnOrder = styled.button``;

export default ContentInfoModal;
