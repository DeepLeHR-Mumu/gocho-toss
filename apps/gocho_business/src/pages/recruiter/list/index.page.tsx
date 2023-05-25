import { useEffect } from "react";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/atom/spinner";

import { PageLayout } from "@/components";
import { NextPageWithLayout } from "@/types";
import { useRecruiterArr } from "@/apis";
import { recruiterListPageFunnelEvent } from "@/ga";

import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const RecruiterListPage: NextPageWithLayout = () => {
  const { data: recruiterDataArr } = useRecruiterArr();
  dayjs.locale("ko");

  useEffect(() => {
    recruiterListPageFunnelEvent();
  }, []);

  if (!recruiterDataArr) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <main css={cssObj.wrapper}>
      <PageHead />
      <PageLayout>
        <h2 css={cssObj.h2Title}>기업 계정 목록</h2>
        <p css={cssObj.pageDesc}>현재 가입된 전체 계정의 목록입니다</p>

        <div css={cssObj.tableWrapper}>
          <div css={cssObj.tableHeader}>
            <strong css={cssObj.header}>이름(부서)</strong>
            <strong css={cssObj.header}>아이디(이메일)</strong>
            <strong css={cssObj.header}>가입일자</strong>
          </div>

          <ul>
            {recruiterDataArr.map((recruiterData) => (
              <li key={recruiterData.email} css={cssObj.rowContainer}>
                <p css={cssObj.data}>
                  {recruiterData.name}({recruiterData.department})
                </p>
                <p css={cssObj.data}>{recruiterData.email}</p>
                <p css={cssObj.data}>{dayjs(recruiterData.createdTime).format("YYYY년 MM일 DD일")}</p>
              </li>
            ))}
          </ul>
        </div>
      </PageLayout>
    </main>
  );
};

export default RecruiterListPage;
