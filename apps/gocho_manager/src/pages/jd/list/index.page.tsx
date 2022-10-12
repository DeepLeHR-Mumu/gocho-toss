import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { mainContainer, pageTitle } from "@style/commonStyles";
import { useJobArr } from "@api/job/useJobArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { BottomPagination } from "@component/bottomPagination";
import { JD_LIST_URL } from "@constant/internalURL";

import { dateConverter } from "shared-util/date";
import {
  flexBox,
  jobContainer,
  mainInfoContainer,
  jobTitle,
  taskContainer,
  taskBox,
  buttonContainer,
  buttonBox,
} from "./style";

const JdList: NextPage = () => {
  const router = useRouter();

  const limit = 10;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(Number(router.query.page));

  const {
    data: jobDataArr,
    isLoading,
    isError,
  } = useJobArr({
    order: "popular",
    // filter: "valid",
    limit,
    offset: (page - 1) * limit,
  });

  useEffect(() => {
    setPage(Number(router.query.page));
  }, [router.query]);

  useEffect(() => {
    if (jobDataArr) {
      setTotal(jobDataArr.count);
    }
  }, [jobDataArr]);

  const totalPage = Math.ceil(total / limit);

  if (!jobDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 목록</h2>
      <section>
        {jobDataArr.jobDataArr.map((job) => {
          const { year: startYear, month: startMonth, date: startDate } = dateConverter(job.startTime);
          const { year: endYear, month: endMonth, date: endDate } = dateConverter(job.endTime);

          return (
            <div css={flexBox}>
              <div css={jobContainer}>
                <p>{job.id}</p>
                <div css={mainInfoContainer}>
                  <p>{job.companyName}</p>
                  <p css={jobTitle}>{job.title}</p>
                </div>
                <div css={taskContainer}>
                  {job.taskArr.map((task) => {
                    return <p css={taskBox}>{task}</p>;
                  })}
                </div>
                <div>
                  {startYear}-{startMonth}-{startDate}
                  <br />
                  {endYear}-{endMonth}-{endDate}
                </div>
              </div>
              <div css={buttonContainer}>
                <button css={buttonBox} type="button">
                  채용 링크
                </button>
                <button css={buttonBox} type="button">
                  수정
                </button>
                <button css={buttonBox} type="button">
                  삭제
                </button>
                <button css={buttonBox} type="button">
                  마감하기
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <BottomPagination totalPage={totalPage} url={JD_LIST_URL} />
    </main>
  );
};

export default JdList;
