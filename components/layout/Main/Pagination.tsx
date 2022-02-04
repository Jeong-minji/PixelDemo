import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import {
  PAGE_PER_GROUP,
  MIN_PAGE_INDEX,
  MAX_PAGE_INDEX,
} from "../../../lib/pagenationVariable";
import { setCurrentPage } from "../../../features/CurrentPage/CurrentPageReducer";

import Page from "./Page";
import {
  Wrapper,
  BtnArrow,
  PageList,
} from "../../../styles/Main/PaginationStyle";

const Pagination: React.FC = () => {
  let indexList: number[] = [];
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(
    (state: { currentPage: number }) => state.currentPage
  );

  const indexListStart = Math.floor((currentPage - 1) / PAGE_PER_GROUP);

  for (let i = 0; i < PAGE_PER_GROUP; i++) {
    indexList = [...indexList, indexListStart * PAGE_PER_GROUP + i];
  }

  const handleBtnPrev = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleBtnNext = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handleClickIndex = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    dispatch(setCurrentPage(Number(target.innerHTML)));
  };

  return (
    <Wrapper>
      <BtnArrow
        onClick={handleBtnPrev}
        disabled={currentPage === MIN_PAGE_INDEX}
      >
        <Image
          id="btnPrev"
          src="/images/left-arrow.png"
          alt="left"
          width={11}
          height={11}
        />
      </BtnArrow>
      <PageList>
        {indexList.map((item) => (
          <Page
            key={item}
            text={item}
            focus={currentPage - 1 === item}
            handleClickIndex={handleClickIndex}
          />
        ))}
      </PageList>
      <BtnArrow
        onClick={handleBtnNext}
        disabled={currentPage === MAX_PAGE_INDEX}
      >
        <Image
          id="btnNext"
          src="/images/right-arrow.png"
          alt="right"
          width={11}
          height={11}
        />
      </BtnArrow>
    </Wrapper>
  );
};

export default Pagination;
