import type { NextPage } from "next";
import { mainContainer, pageTitle } from "@style/commonStyles";

const CompanyList: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 목록</h2>
      <section>기업 목록 영역</section>
    </main>
  );
};

export default CompanyList;
