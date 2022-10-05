import type { NextPage } from "next";
import { mainContainer, title } from "@style/commonStyles";

const Viral: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={title}>바이럴 마케팅</h2>
      <h3>오늘의 공고 복사하기</h3>
      <h3>디시인사이드 복사하기</h3>
      <h3>네이버 블로그 복사하기</h3>
      <h3>인스타그램 & 카카오뷰 복사하기</h3>
      <h3>데일리 공고 리스트</h3>
      <h3>위클리 공고 리스트</h3>
    </main>
  );
};

export default Viral;
