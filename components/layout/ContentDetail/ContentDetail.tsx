import { useState, useEffect } from "react";

import axiosInstance from "../../../api/config";
import { content_detail } from "../../../api/routeUrl";
import { Content } from "../../../interfaces/Entity/index";
import { setPrice } from "../../../utils/setPrice";
import {
  Wrapper,
  LoadingGif,
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
} from "../../../styles/ContentDetail/ContentDetailStyle";

interface DetailInterface {
  contentId: string | string[] | undefined;
}

const ContentDetailModal: React.FC<DetailInterface> = ({ contentId }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [contentDetail, setcontentDetail] = useState<Content>({
    _id: "",
    images: [{ url: "" }],
    view: "",
    interest: "",
    title: "",
    userinfo: { username: "", profile: { url: "" } },
    personalPrice: 0,
    businessPrice: 0,
    enterprisePrice: 0,
    individualPrice: 0,
    companyPrice: 0,
    content_file: { description: "" },
    tags: [{ id: "", text: "" }],
  });

  const {
    images,
    view,
    interest,
    title,
    userinfo,
    personalPrice,
    businessPrice,
    enterprisePrice,
    individualPrice,
    companyPrice,
    content_file,
    tags,
  } = contentDetail;

  useEffect(() => {
    setLoading(true);

    axiosInstance.get(`${content_detail}/${contentId}`).then((res) => {
      setLoading(false);
      setcontentDetail(res.data.data);
    });
  }, [contentId]);

  const handleAlertButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;

    if (target.id === "btnQuestion") alert("문의 준비중 입니다.");
    else alert("구매 준비중 입니다.");
  };

  return (
    <Wrapper>
      <ContentBox>
        {loading ? (
          <LoadingGif src="/images/loading.gif" />
        ) : (
          <>
            <Thumbnail src={images && images[0]?.url} alt="thumbnail" />
            <Information>
              <Column>
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
                  <Likes>{interest} 찜</Likes>
                </Popularity>
              </Column>
              <Title>{title}</Title>
              <HashTagList>
                {tags &&
                  tags?.map(({ id, text }) => {
                    return <Tag key={id}>{`# ${text}`}</Tag>;
                  })}
              </HashTagList>
              <UserInfo>
                <Profile src={userinfo?.profile.url} alt="profile_image" />
                <Name>{userinfo?.username}</Name>
              </UserInfo>
              <Description>{content_file?.description}</Description>
              <Column>
                <BtnQuestion id="btnQuestion" onClick={handleAlertButton}>
                  문의하기
                </BtnQuestion>
                <BtnOrder id="btnOrder" onClick={handleAlertButton}>
                  구매하기
                </BtnOrder>
              </Column>
            </Information>
          </>
        )}
      </ContentBox>
    </Wrapper>
  );
};

export default ContentDetailModal;
