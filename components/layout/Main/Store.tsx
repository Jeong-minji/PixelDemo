import { Wrapper, ContentsList } from "../../../styles/Main/StoreStyle";
import * as Entity from "../../../api/Entity/index";
import Content from "./Content";
import Pagenation from "./Pagenation";

interface StoreInterface {
  contentList: Entity.Content[];
  getIndex: (page: number) => void;
}

const Store: React.FC<StoreInterface> = ({ contentList, getIndex }) => {
  return (
    <Wrapper>
      <ContentsList>
        {contentList.map((item) => {
          return <Content key={item._id} contentData={item} />;
        })}
      </ContentsList>
      <Pagenation getIndex={getIndex} />
    </Wrapper>
  );
};

export default Store;
