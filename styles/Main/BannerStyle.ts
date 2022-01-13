import styled from "styled-components";

export const Wrapper = styled.div<{ img: string | undefined }>`
  display: flex;
  justify-content: center;
  height: 320px;
  color: white;
  background-size: cover;
  background-position: center 24%;
  background-image: linear-gradient(to bottom, transparent, #1c1c1c),
    url(${({ img }) => img});
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

export const ProfileImage = styled.div<{ img: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ img }) => img});
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Name = styled.h1`
  margin-top: 12px;
  font-size: 25px;
`;

export const TagList = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

export const Tag = styled.span`
  margin: 0 12px;
  cursor: pointer;
`;

export const Introduce = styled.p`
  margin-top: 12px;
  font-size: 14px;
`;

export const Email = styled.div`
  margin-top: 12px;
  padding: 8px 8px 10px 8px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
`;
