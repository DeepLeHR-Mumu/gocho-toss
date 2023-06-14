import { useEffect } from "react";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/atom/spinner";

import { PageLayout } from "@/components";
import { NextPageWithLayout } from "@/types";
import { useManagerArr, useManagerProfile } from "@/apis";
import { managerListPageFunnelEvent } from "@/ga";

import { CompanySideNav } from "@/components/global/companySideNav";
import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const ManagerListPage: NextPageWithLayout = () => {
  const { data: userInfoData } = useManagerProfile();
  const { data: managerDataArr } = useManagerArr({ companyId: userInfoData?.company.id });
  dayjs.locale("ko");

  useEffect(() => {
    managerListPageFunnelEvent();
  }, []);

  if (!managerDataArr) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <PageHead />
      <PageLayout>
        <div css={cssObj.contentWrapper}>
          <CompanySideNav />
          <div css={cssObj.partContainer}>
            <h2 css={cssObj.h2Title}>기업 계정 목록</h2>
            <p css={cssObj.pageDesc}>현재 가입된 전체 계정의 목록입니다</p>
            <div css={cssObj.tableWrapper}>
              <div css={cssObj.tableHeader}>
                <strong css={cssObj.header}>이름(부서)</strong>
                <strong css={cssObj.header}>아이디(이메일)</strong>
                <strong css={cssObj.header}>가입일자</strong>
              </div>

              <ul>
                {managerDataArr.map((managerData) => (
                  <li key={managerData.email} css={cssObj.rowContainer}>
                    <p css={cssObj.data}>
                      {managerData.name}({managerData.department})
                    </p>
                    <p css={cssObj.data}>{managerData.email}</p>
                    <p css={cssObj.data}>{dayjs(managerData.createdTime).format("YYYY년 MM일 DD일")}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ManagerListPage;
