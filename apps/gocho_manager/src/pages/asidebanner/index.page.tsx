import type { NextPage } from "next";
import { mainContainer, title } from "@style/commonStyles";

const AsideBanner: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={title}>사이드 배너 업로드</h2>
      <section>배너 업로드 영역</section>
      <h2 css={title}>사이드 배너 업로드</h2>
      <section>배너 업로드 영역</section>
    </main>
  );
};

export default AsideBanner;
