import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingGif = styled.img`
  width: 100px;
  margin-top: 50%;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  margin-top: 90px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-all;
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  font-family: NotoSansB;
`;

export const Price = styled.span`
  font-size: 14px;
`;

export const Popularity = styled.div`
  display: flex;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Views = styled.span``;

export const Likes = styled.span`
  margin-left: 10px; ;
`;

export const Title = styled.h1`
  margin: 16px 0;
  line-height: 1.4em;
  font-size: 16px;
  font-family: NotoSansB;
`;

export const HashTagList = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6em;
`;

export const Tag = styled.span`
  margin-right: 10px;
  cursor: pointer;
  word-break: keep-all;
`;

export const UserInfo = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

export const Profile = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Name = styled.span`
  margin-left: 10px;
  font-size: 12px;
  font-family: NotoSansB;
`;

export const Description = styled.p`
  min-height: 120px;
  margin-top: 20px;
  line-height: 1.6em;
  font-size: 12px;
`;

export const Btn = styled.button`
  min-width: 225px;
  margin: 0 5px;
  padding: 12.5px;
  border: none;
  border-radius: 64px;
  font-size: 16px;
  font-family: NotoSansB;
  cursor: pointer;
`;

export const BtnQuestion = styled(Btn)`
  background-color: rgba(0, 0, 0, 0.1);
`;

export const BtnOrder = styled(Btn)`
  background-color: #00e07e;
`;
