import Link from "next/link";

import { setPrice } from "../../../utils/setPrice";
import { Content } from "../../../interfaces/Entity/index";
import {
  Wrapper,
  ContentImage,
  Column,
  Title,
  AuthorInfo,
  AuthorImage,
  AuthorName,
  ContentInfo,
  Price,
  Popularity,
  Views,
  Liked,
} from "../../../styles/Main/ContentBoxStyle";

interface ContentInterface {
  contentData: Content;
}

const ContentBox: React.FC<ContentInterface> = ({ contentData }) => {
  const {
    _id,
    title,
    images,
    userinfo,
    view,
    interest,
    personalPrice,
    businessPrice,
    enterprisePrice,
    individualPrice,
    companyPrice,
  } = contentData;

  return (
    <Wrapper>
      <Link href={`/content/${_id}`} passHref>
        <ContentImage img1={images[0]?.url} img2={images[1]?.url} />
      </Link>
      <Column>
        <Link href={`/content/${_id}`} passHref>
          <Title>{title}</Title>
        </Link>
        <AuthorInfo>
          <AuthorImage img={userinfo.profile?.url} />
          <AuthorName>{userinfo.username}</AuthorName>
        </AuthorInfo>
        <ContentInfo>
          <Price>
            {setPrice(
              personalPrice,
              businessPrice,
              enterprisePrice,
              individualPrice,
              companyPrice
            ).toLocaleString()}{" "}
            P
          </Price>
          <Popularity>
            <Views>{view} 뷰</Views>
            <Liked>{interest} 찜</Liked>
          </Popularity>
        </ContentInfo>
      </Column>
    </Wrapper>
  );
};

export default ContentBox;
