import { useRouter } from "next/router";
import { ReactElement } from "react";

import { useJdArr } from "@/api";
import { ErrorScreen, LoadingScreen, Pagination, GlobalLayout } from "@/component";
import { INTERNAL_URL } from "@/constant";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import type { NextPageWithLayout } from "@/types";

import JobCard from "./component/jobCard";
import { JD_SEARCH_LIMIT } from "./constant";
import { cssObj } from "./style";

const BusinessJdRegisterList: NextPageWithLayout = () => {
  const router = useRouter();
  const filter = String(router.query.type) === "register" ? "upload-waiting" : "modify-waiting";

  const {
    data: jobDataObj,
    isLoading,
    isError,
  } = useJdArr({
    order: "recent",
    filter,
    size: JD_SEARCH_LIMIT,
    page: Number(router.query.page),
  });

  if (!jobDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <div css={cssObj.titleContainer}>
        <h2 css={pageTitle}>{filter === "upload-waiting" ? "공고 등록 요청 목록" : "공고 수정 요청 목록"}</h2>
      </div>
      <section css={cssObj.sectionContainer}>
        <table css={cssObj.tableContainer}>
          <thead>
            <tr css={cssObj.jobContainer}>
              <th css={cssObj.jobIdBox}>공고 ID</th>
              <th css={cssObj.mainInfoBox}>기업이름 / 공고제목</th>
              <th css={cssObj.taskContainer}>직무</th>
              <th css={cssObj.dateBox}>채용 날짜</th>
              <th css={cssObj.buttonContainer}> </th>
            </tr>
          </thead>
          <tbody>
            {jobDataObj.jdDataArr.map((job) => (
              <JobCard key={`ManagerBizJobCard${job.id}`} job={job} />
            ))}
          </tbody>
        </table>
      </section>
      <Pagination
        totalPage={jobDataObj.pageResult.totalPages}
        url={`${INTERNAL_URL.BUSINESS_JD_LIST_URL}?type=${String(router.query.type)}`}
      />
    </main>
  );
};

BusinessJdRegisterList.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default BusinessJdRegisterList;
