import type { NextPage } from "next";
import { mainContainer, title } from "@style/commonStyles";

const Factory: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={title}>공장 등록</h2>
      <section>공장 등록 영역</section>
    </main>
  );
};

export default Factory;
