import ContentInfoModal from "../components/layout/ContentInfoModal";
import styled from "styled-components";

const Test: React.FC = () => {
  return (
    <Wrapper>
      <ContentInfoModal />
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

export default Test;
