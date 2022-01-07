import ContentInfo from "../../components/layout/ContentInfo";
import styled from "styled-components";
import { useRouter } from "next/router";

const Content: React.FC = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <ContentInfo contentId={router.query.id} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Content;
