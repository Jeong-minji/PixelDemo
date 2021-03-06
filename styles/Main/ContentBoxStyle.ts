import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  width: 570px;
  margin: 16px 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  font-weight: 600;
`;

export const Thumbnail = styled.div`
  position: relative;
`;

export const MainImage = styled.img<{ isExist: boolean }>`
  position: absolute;
  left: 0;
  width: 254px;
  height: 132px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    opacity: ${({ isExist }) => (isExist ? 0 : 1)};
  }
`;

export const SubImage = styled.img`
  width: 254px;
  height: 132px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  object-fit: cover;
  cursor: pointer;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export const Title = styled.h1`
  line-height: 1.4em;
  font-size: 14px;
  cursor: pointer;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
`;

export const AuthorImage = styled.img<{ img: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ img }) => img});
`;

export const AuthorName = styled.span`
  margin-left: 6px;
  font-size: 10px;
`;

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.span`
  font-size: 14px;
`;

export const Popularity = styled.div`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Views = styled.span``;

export const Liked = styled.span`
  margin-left: 8px;
`;
