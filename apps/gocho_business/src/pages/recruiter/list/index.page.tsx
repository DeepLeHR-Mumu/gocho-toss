import { ReactElement } from "react";

import { Spinner } from "shared-ui/common/atom/spinner";

import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { Footer, GlobalLayout, PageLayout } from "@/components/global/layout";
import { NextPageWithLayout } from "@/pages/index/type";
import { useRecruiterArr } from "@/apis/recruiter/useRecruiterArr";

import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const RecruiterListPage: NextPageWithLayout = () => {
  const { data: recruiterDataArr } = useRecruiterArr();

  if (!recruiterDataArr) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <main>
      <PageLayout>
        <h2 css={cssObj.h2Title}>기업 계정 목록</h2>
        <p css={cssObj.pageDesc}>현재 가입된 전체 계정의 목록입니다</p>

        <div css={cssObj.tableWrapper}>
          <div css={cssObj.tableHeader}>
            <p css={cssObj.header}>이름(부서)</p>
            <p css={cssObj.header}>아이디(이메일)</p>
          </div>

          <ul>
            {recruiterDataArr.map((recruiterData) => (
              <li key={recruiterData.email} css={cssObj.rowContainer}>
                <p css={cssObj.data}>{recruiterData.name}</p>
                <p css={cssObj.data}>{recruiterData.email}</p>
              </li>
            ))}
          </ul>
        </div>
      </PageLayout>
    </main>
  );
};

RecruiterListPage.getLayout = (page: ReactElement) => (
  <>
    <PageHead />
    <GlobalLayout>
      <CompanyInfoPart />
      {page}
      <Footer />
    </GlobalLayout>
  </>
);

export default RecruiterListPage;
