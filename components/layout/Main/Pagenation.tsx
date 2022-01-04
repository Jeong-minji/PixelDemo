import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Page from "./Page";
import {
  Wrapper,
  BtnArrow,
  PageList,
} from "../../../styles/Main/PagenationStyle";

const PAGES_PER_GROUP = 5;

interface PagenationInterface {
  getIndex: (page: number) => void;
}

const Pagenation: React.FC<PagenationInterface> = ({ getIndex }) => {
  const prevGroup = useRef<number>(0);
  const [pageGroup, setPageGroup] = useState<number>(1);
  const [index, setIndex] = useState<number>(1);
  const pages: number[] = [];

  for (let i = PAGES_PER_GROUP; i > 0; i--) {
    pages.push(pageGroup * PAGES_PER_GROUP - (i - 1));
  }

  useEffect(() => {
    // 현재 pageGroup이 이전 pageGroup보다 크면(다음 버튼), 다음 페이지의 첫 번째 인덱스로 이동
    if (prevGroup.current < pageGroup) {
      getIndex(pages[0]);
      setIndex(pages[0]);
    } else {
      getIndex(pages[PAGES_PER_GROUP - 1]);
      setIndex(pages[PAGES_PER_GROUP - 1]);
    }
  }, [pageGroup]);

  // 페이지 인덱스 클릭 시, setIndex하고 통신 컴포넌트에 index 전달
  const handlePage = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;

    getIndex(Number(target.innerHTML));
    setIndex(Number(target.innerHTML));
  };

  // 왼쪽/오른쪽 화살표 클릭 시, pageGroup 변경
  const handleDirection = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLImageElement;

    setPageGroup(target.id === "btnPrev" ? pageGroup - 1 : pageGroup + 1);
    prevGroup.current = pageGroup;
  };

  return (
    <Wrapper>
      <BtnArrow
        onClick={handleDirection}
        disabled={pageGroup === 1 ? true : false}
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
        {pages.map((page) => {
          return (
            <Page
              key={page}
              text={page}
              focus={page === index}
              handlePage={handlePage}
            />
          );
        })}
      </PageList>
      <BtnArrow
        onClick={handleDirection}
        disabled={pageGroup === 4 ? true : false}
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

export default Pagenation;
