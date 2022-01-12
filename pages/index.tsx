import { useState, useEffect } from "react";
import type { NextPage } from "next";

import axiosInstance from "../api/config";
import { contents } from "../api/routeUrl";
import Banner from "../components/layout/Main/Banner";
import Store from "../components/layout/Main/Store";
import { Content } from "../interfaces/Entity/index";

const PAGES_PER_GROUP = 5;

const Index: NextPage = () => {
  const [nowPage, setNowPage] = useState<number>(1);
  const [contentData, setContentData] = useState<Content[]>([]);

  useEffect(() => {
    axiosInstance
      .get(
        `${contents}?_start=${
          (nowPage - 1) * PAGES_PER_GROUP + 1
        }&isActive=true&_limit=5&_sort=createdAt:desc`
      )
      .then((res) => setContentData(res.data.data));
  }, [nowPage]);

  return (
    <>
      <Banner />
      <Store
        contentList={contentData}
        nowPage={nowPage}
        setNowPage={setNowPage}
      />
    </>
  );
};

export default Index;
