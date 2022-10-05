import type { NextPage } from "next";
import { mainContainer, title } from "@style/commonStyles";

const TopBanner: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={title}>상단 배너</h2>
      <section>상단 배너 영역</section>
      <h2 css={title}>배너 리스트</h2>
      <section>배너 리스트 영역</section>
    </main>
  );
};

export default TopBanner;
