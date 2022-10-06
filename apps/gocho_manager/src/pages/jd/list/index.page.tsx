import type { NextPage } from "next";
import { mainContainer, pageTitle } from "@style/commonStyles";

const JdList: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 목록</h2>
      <section>공고 목록 영역</section>
    </main>
  );
};

export default JdList;
