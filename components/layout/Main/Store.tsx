import { Wrapper, ContentsList } from "../../../styles/Main/StoreStyle";
import { Content } from "../../../interfaces/Entity/index";
import ContentBox from "./ContentBox";
import Pagenation from "./Pagenation";

interface StoreInterface {
  contentList: Content[];
  nowPage: number;
  setNowPage: (page: number) => void;
}

const Store: React.FC<StoreInterface> = ({
  contentList,
  nowPage,
  setNowPage,
}) => {
  return (
    <Wrapper>
      <ContentsList>
        {contentList?.map((item) => {
          return <ContentBox key={item._id} contentData={item} />;
        })}
      </ContentsList>
      <Pagenation nowPage={nowPage} setNowPage={setNowPage} />
    </Wrapper>
  );
};

export default Store;
