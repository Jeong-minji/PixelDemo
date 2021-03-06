import { useRouter } from "next/router";

import ContentDetail from "../../components/layout/ContentDetail/ContentDetail";
import {
  Wrapper,
  Row,
  BtnGoToStore,
} from "../../styles/ContentDetail/ContentPageStyle";

const Content: React.FC = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Row>
        <ContentDetail contentId={router.query.id} />
      </Row>
      <BtnGoToStore onClick={() => router.push("/")}>
        스토어로 돌아가기
      </BtnGoToStore>
    </Wrapper>
  );
};

export default Content;
