import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import { useJdArr } from "@api/jd/useJdArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { BottomPagination } from "@component/bottomPagination";
import { BUSINESS_JD_LIST_URL } from "@constant/internalURL";
import { mainContainer, pageTitle } from "@style/commonStyles";

import JobCard from "./component/jobCard";
import { JD_SEARCH_LIMIT } from "./constant";
import {
  sectionContainer,
  listChangeButton,
  tableContainer,
  jobContainer,
  jobIdBox,
  mainInfoBox,
  taskContainer,
  dateBox,
  buttonContainer,
} from "./style";

const BusinessJdList: NextPage = () => {
  const [jdStatus, setjdStatus] = useState<"upload-waiting" | "modify-waiting">("upload-waiting");
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
    setjdStatus((prev) => {
      return prev === "upload-waiting" ? "modify-waiting" : "upload-waiting";
    });
  };

  const totalPage = Math.ceil(jobDataObj.count / JD_SEARCH_LIMIT);

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>{jdStatus === "upload-waiting" ? "공고 등록 요청 목록" : "공고 수정 요청 목록"}</h2>
      <section css={sectionContainer}>
        <button
          type="button"
          css={listChangeButton}
          onClick={() => {
            changeJdStatusHandler();
          }}
        >
          {jdStatus === "upload-waiting" ? "수정 요청 목록 보기" : "등록 요청 목록 보기"}
        </button>
        <table css={tableContainer}>
          <thead>
            <tr css={jobContainer}>
              <th css={jobIdBox}>공고 ID</th>
              <th css={mainInfoBox}>기업이름 / 공고제목</th>
              <th css={taskContainer}>직무</th>
              <th css={dateBox}>채용 날짜</th>
              <th css={buttonContainer}> </th>
            </tr>
          </thead>
          <tbody>
            {jobDataObj.jdDataArr.map((job) => {
              return <JobCard key={`ManagerBizJobCard${job.id}`} job={job} />;
            })}
          </tbody>
        </table>
      </section>
      <BottomPagination totalPage={totalPage} url={BUSINESS_JD_LIST_URL} />
    </main>
  );
};

export default BusinessJdList;
