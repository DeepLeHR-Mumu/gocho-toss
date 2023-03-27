import { useRouter } from "next/router";
import { useState, ReactElement } from "react";

import { useJdArr } from "@/api/jd/useJdArr";
import { ErrorScreen, LoadingScreen, Pagination, GlobalLayout } from "@/component";
import { INTERNAL_URL } from "@/constant";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import type { NextPageWithLayout } from "@/types";

import JobCard from "./component/jobCard";
import { JD_SEARCH_LIMIT } from "./constant";
import { cssObj } from "./style";

const BusinessJdList: NextPageWithLayout = () => {
  const [jdStatus, setJdStatus] = useState<"upload-waiting" | "modify-waiting">("upload-waiting");
  const router = useRouter();

  const {
    data: jobDataObj,
    isLoading,
    isError,
  } = useJdArr({
    order: "recent",
    status: jdStatus,
    limit: JD_SEARCH_LIMIT,
    offset: (Number(router.query.page) - 1) * JD_SEARCH_LIMIT,
  });

  if (!jobDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const changeJdStatusHandler = () => {
    setJdStatus((prev) => (prev === "upload-waiting" ? "modify-waiting" : "upload-waiting"));
  };

  const totalPage = Math.ceil(jobDataObj.count / JD_SEARCH_LIMIT);

  return (
    <main css={mainContainer}>
      <div css={cssObj.titleContainer}>
        <h2 css={pageTitle}>{jdStatus === "upload-waiting" ? "공고 등록 요청 목록" : "공고 수정 요청 목록"}</h2>
        <button
          type="button"
          css={cssObj.listChangeButton}
          onClick={() => {
            changeJdStatusHandler();
          }}
        >
          {jdStatus === "upload-waiting" ? "수정 요청 목록 보기" : "등록 요청 목록 보기"}
        </button>
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
      <Pagination totalPage={totalPage} url={INTERNAL_URL.BUSINESS_JD_LIST_URL} />
    </main>
  );
};

BusinessJdList.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default BusinessJdList;
