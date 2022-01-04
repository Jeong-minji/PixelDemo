import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  width: 570px;
  margin: 16px 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`;

export const ContentImage = styled.div<{ img1: string; img2: string }>`
  width: 254px;
  height: 132px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-size: cover;
  background-position: center;
  background-image: url(${({ img1 }) => img1});
  transition: all 0.2s ease-in;

  &:hover {
    background-image: url(${({ img1, img2 }) => (img2 ? img2 : img1)});
  }
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
