import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useCompanyArr } from "@api/company/useCompanyArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { BottomPagination } from "@component/bottomPagination";
import { BUSINESS_COMPANY_LIST_URL } from "@constant/internalURL";
import { mainContainer, pageTitle } from "@style/commonStyles";

import CompanyCard from "./component/companyCard";
import { COMPANY_SEARCH_LIMIT } from "./constant";
import {
  sectionContainer,
  listChangeButton,
  tableContainer,
  companyContainer,
  companyIdBox,
  companyNameBox,
  buttonContainer,
} from "./style";

const BusinessCompanyList: NextPage = () => {
  const [companyStatus, setCompanyStatus] = useState<"upload-waiting" | "modify-waiting">("upload-waiting");
  const router = useRouter();

  const {
    data: companyDataObj,
    isLoading,
    isError,
  } = useCompanyArr({
    order: "recent",
    status: companyStatus,
    limit: COMPANY_SEARCH_LIMIT,
    offset: (Number(router.query.page) - 1) * COMPANY_SEARCH_LIMIT,
  });

  if (!companyDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const changeCompanyStatusHandler = () => {
    setCompanyStatus((prev) => {
      return prev === "upload-waiting" ? "modify-waiting" : "upload-waiting";
    });
  };

  const totalPage = Math.ceil(companyDataObj.count / COMPANY_SEARCH_LIMIT);

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>{companyStatus === "upload-waiting" ? "기업 등록 요청 목록" : "기업 수정 요청 목록"}</h2>
      <section css={sectionContainer}>
        <button
          type="button"
          css={listChangeButton}
          onClick={() => {
            changeCompanyStatusHandler();
          }}
        >
          {companyStatus === "upload-waiting" ? "수정 요청 목록 보기" : "등록 요청 목록 보기"}
        </button>
        <table css={tableContainer}>
          <thead>
            <tr css={companyContainer}>
              <th css={companyIdBox}>회사 ID</th>
              <th css={companyNameBox}>회사 이름</th>
              <th css={buttonContainer}> </th>
            </tr>
          </thead>
          <tbody>
            {companyDataObj.companyDataArr.map((company) => {
              return <CompanyCard key={`ManagerBizCompanyCard${company.id}`} company={company} />;
            })}
          </tbody>
        </table>
      </section>
      <BottomPagination totalPage={totalPage} url={BUSINESS_COMPANY_LIST_URL} />
    </main>
  );
};

export default BusinessCompanyList;
