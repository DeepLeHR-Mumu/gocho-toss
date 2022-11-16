import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useJobArr } from "@api/job/useJobArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { BottomPagination } from "@component/bottomPagination";
import { JD_LIST_URL } from "@constant/internalURL";

import { mainContainer, pageTitle } from "@style/commonStyles";

import JobCard from "@pages/jd/list/component/jobCard";
import {
  sectionContainer,
  tableContainer,
  jobContainer,
  jobIdBox,
  mainInfoBox,
  taskContainer,
  dateBox,
  buttonContainer,
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
    order: "recent",
    filter: "valid",
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
      <section css={sectionContainer}>
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
            {jobDataArr.jobDataArr.map((job) => {
              return <JobCard key={`ManagerJobCard${job.id}`} job={job} />;
            })}
          </tbody>
        </table>
      </section>
      <BottomPagination totalPage={totalPage} url={JD_LIST_URL} />
    </main>
  );
};

export default JdList;
