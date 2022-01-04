import * as Entity from "../../../api/Entity/index";
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
} from "../../../styles/Main/ContentStyle";

interface ContentInterface {
  contentData: Entity.Content;
}

const Content: React.FC<ContentInterface> = ({ contentData }) => {
  const {
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

  const setPrice = () => {
    const prices = [
      personalPrice,
      businessPrice,
      enterprisePrice,
      individualPrice,
      companyPrice,
    ];

    let filteredPrices = [];

    for (let i = 0; i < prices.length; i++) {
      if (prices[i] !== -1) {
        filteredPrices.push(prices[i]);
      }
    }

    filteredPrices.sort((a, b) => a - b);

    return Math.min(filteredPrices[0]);
  };

  return (
    <Wrapper>
      <ContentImage img1={images[0]?.url} img2={images[1]?.url}></ContentImage>
      <Column>
        <Title>{title}</Title>
        <AuthorInfo>
          <AuthorImage img={userinfo.profile?.url}></AuthorImage>
          <AuthorName>{userinfo.username}</AuthorName>
        </AuthorInfo>
        <ContentInfo>
          <Price>{setPrice().toLocaleString()} P</Price>
          <Popularity>
            <Views>{view} 뷰</Views>
            <Liked>{interest} 찜</Liked>
          </Popularity>
        </ContentInfo>
      </Column>
    </Wrapper>
  );
};

export default Content;
