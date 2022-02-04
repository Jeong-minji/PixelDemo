import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import axiosInstance, { TOKEN } from "../features/api/config";
import { contents } from "../features/api/routeUrl";
import { Content } from "../interfaces/Entity/index";
import { PAGE_PER_GROUP } from "../lib/pagenationVariable";

import Banner from "../components/layout/Main/Banner";
import Store from "../components/layout/Main/Store";

const Index: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [contentData, setContentData] = useState<Content[]>([]);
  const currentPage = useSelector(
    (state: { currentPage: number }) => state.currentPage
  );

  useEffect(() => {
    if (!TOKEN) {
      alert("로그인 한 뒤에 이용할 수 있는 서비스입니다.");
      router.push("/sign-in");
    }

    const startNumber = currentPage * PAGE_PER_GROUP - 5;

    setLoading(true);

    axiosInstance
      .get(
        `${contents}?_start=${startNumber}&isActive=true&_limit=5&_sort=createdAt:desc`
      )
      .then((res) => {
        setLoading(false);
        setContentData(res.data.data);
      });
  }, [currentPage, router]);

  return (
    <>
      <Banner />
      <Store contentList={contentData} loading={loading} />
    </>
  );
};

export default Index;
