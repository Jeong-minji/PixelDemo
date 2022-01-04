import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Banner from "../components/layout/Main/Banner";
import Store from "../components/layout/Main/Store";
import * as Entity from "../api/Entity/index";
import axiosInstance from "../api/config";
import { contents } from "../api/routeUri";

const Index: NextPage = () => {
  const [nowPage, setNowPage] = useState<number>(1);
  const [contentData, setContentData] = useState<Entity.Content[]>([]);

  useEffect(() => {
    axiosInstance
      .get(
        `${contents}?_start=${
          (nowPage - 1) * 5 + 1
        }&isActive=true&_limit=5&_sort=createdAt:asc`
      )
      .then((res) => setContentData(res.data.data));
  }, [nowPage]);

  const getIndex = (page: number) => {
    setNowPage(page);
  };

  return (
    <>
      <Banner />
      <Store contentList={contentData} getIndex={getIndex} />
    </>
  );
};

export default Index;
