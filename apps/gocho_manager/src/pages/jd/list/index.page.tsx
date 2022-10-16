import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { dateConverter } from "shared-util/date";
import { useJobArr } from "@api/job/useJobArr";
import { useDeleteJob } from "@api/job/useDeleteJob";
import { useEndJob } from "@api/job/useEndJob";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { BottomPagination } from "@component/bottomPagination";
import { JD_LIST_URL } from "@constant/internalURL";

import { mainContainer, pageTitle } from "@style/commonStyles";

import {
  sectionContainer,
  tableContainer,
  jobContainer,
  jobIdBox,
  mainInfoBox,
  companyName,
  jobTitle,
  taskContainer,
  taskBox,
  dateBox,
  buttonContainer,
  activeButton,
  deleteButton,
} from "./style";

const JdList: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const limit = 10;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(Number(router.query.page));

  const { mutate: mutateDelete } = useDeleteJob();
  const { mutate: mutateEnd } = useEndJob();

  const jobDelete = (jobId: number) => {
    mutateDelete(
      { jdId: jobId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
        },
      }
    );
  };

  const jobEnd = (jobId: number) => {
    mutateEnd(
      { jdId: jobId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
        },
      }
    );
  };

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
          <tr css={jobContainer}>
            <th css={jobIdBox}>공고 ID</th>
            <th css={mainInfoBox}>기업이름 / 공고제목</th>
            <th css={taskContainer}>직무</th>
            <th css={dateBox}>채용 날짜</th>
            <th css={buttonContainer}> </th>
          </tr>

          {jobDataArr.jobDataArr.map((job) => {
            const { year: startYear, month: startMonth, date: startDate } = dateConverter(job.startTime);
            const { year: endYear, month: endMonth, date: endDate } = dateConverter(job.endTime);

            return (
              <tr css={jobContainer}>
                <td css={jobIdBox}>{job.id}</td>
                <td css={mainInfoBox}>
                  <p css={companyName}>{job.companyName}</p>
                  <p css={jobTitle}>{job.title}</p>
                </td>
                <td css={taskContainer}>
                  {job.taskArr.map((task) => {
                    return <p css={taskBox}>{task}</p>;
                  })}
                </td>
                <td css={dateBox}>
                  {startYear}-{startMonth}-{startDate}
                  <br />
                  {endYear}-{endMonth}-{endDate}
                </td>
                <td css={buttonContainer}>
                  <button css={activeButton} type="button">
                    <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                      채용 링크
                    </a>
                  </button>
                  <button css={activeButton} type="button">
                    수정
                  </button>
                  <button
                    css={deleteButton}
                    type="button"
                    onClick={() => {
                      return jobDelete(job.id);
                    }}
                  >
                    삭제
                  </button>
                  <button
                    css={activeButton}
                    type="button"
                    onClick={() => {
                      return jobEnd(job.id);
                    }}
                  >
                    마감하기
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
      <BottomPagination totalPage={totalPage} url={JD_LIST_URL} />
    </main>
  );
};

export default JdList;
