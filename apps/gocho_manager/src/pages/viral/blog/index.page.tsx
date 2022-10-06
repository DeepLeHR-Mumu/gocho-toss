import type { NextPage } from "next";
import { mainContainer, pageTitle } from "@style/commonStyles";

const Blog: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>바이럴 마케팅</h2>
      <h3>오늘의 공고 복사하기</h3>
      <h3>디시인사이드 복사하기</h3>
      <h3>네이버 블로그 복사하기</h3>
    </main>
  );
};

export default Blog;
