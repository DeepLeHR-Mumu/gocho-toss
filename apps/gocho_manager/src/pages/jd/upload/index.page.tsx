import type { NextPage } from "next";
import { mainContainer, title } from "@style/commonStyles";

const JdUpload: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={title}>공고 업로드</h2>
      <section>공고 업로드 영역</section>
    </main>
  );
};

export default JdUpload;
