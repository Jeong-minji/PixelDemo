import { Content } from "../../../interfaces/Entity/index";

import ContentBox from "./ContentBox";
import Pagination from "./Pagination";
import {
  Wrapper,
  LoadingGif,
  ContentsList,
} from "../../../styles/Main/StoreStyle";

interface StoreInterface {
  contentList: Content[];
  loading: boolean;
}

const Store: React.FC<StoreInterface> = ({ contentList, loading }) => {
  return (
    <Wrapper>
      {loading ? (
        <LoadingGif src="/images/loading.gif" />
      ) : (
        <>
          <ContentsList>
            {contentList?.map((item) => {
              return <ContentBox key={item._id} contentData={item} />;
            })}
          </ContentsList>
          <Pagination />
        </>
      )}
    </Wrapper>
  );
};

export default Store;
