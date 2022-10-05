import type { NextPage } from "next";
import { mainContainer, title } from "@style/commonStyles";

const MainBanner: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={title}>메인 배너 업로드</h2>
      <section>메인 배너 영역</section>
      <h2 css={title}>배너 리스트</h2>
      <section>배너 리스트 영역</section>
    </main>
  );
};

export default MainBanner;
