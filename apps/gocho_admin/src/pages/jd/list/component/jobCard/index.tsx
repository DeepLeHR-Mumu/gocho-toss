import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { jobArrKeyObj } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { dateConverter } from "shared-util";

import { useDeleteJd } from "@api/jd/useDeleteJd";
import { useEndJd } from "@api/jd/useEndJd";
import { JD_EDIT_URL } from "@constant/internalURL";

import Link from "next/link";
import { JobCardProps } from "./type";
import { cssObj } from "./style";

const JobCard: FunctionComponent<JobCardProps> = ({ job }) => {
  const queryClient = useQueryClient();

  const { mutate: deleteJobMutate } = useDeleteJd();
  const { mutate: endJobMutate } = useEndJd();

  const deleteJobHandler = (jobId: number) => {
    deleteJobMutate(
      { jdId: jobId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jobArrKeyObj.all);
        },
      }
    );
  };

  const endJobHandler = (jobId: number) => {
    endJobMutate(
      { jdId: jobId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jobArrKeyObj.all);
        },
      }
    );
  };

  const { year: startYear, month: startMonth, date: startDate } = dateConverter(job.startTime);
  const { year: endYear, month: endMonth, date: endDate } = dateConverter(job.endTime);

  return (
    <li css={cssObj.wrapper}>
      <ul css={cssObj.container}>
        <li css={cssObj.centerDesc}>{job.id}</li>
        <li css={cssObj.leftDesc}>
          <span css={cssObj.companyName}>{job.companyName}</span>
          {job.title}
        </li>
        <li css={cssObj.taskBox}>
          {job.taskArr.map((task) => {
            return (
              <span css={cssObj.task} key={`${job.id}${task}`}>
                {task}
              </span>
            );
          })}
        </li>
        <li css={cssObj.leftDesc}>
          <span css={cssObj.startDateCSS}>
            {startYear}.{startMonth}.{startDate}
          </span>
          <span css={cssObj.endDateCSS}>
            {endYear}.{endMonth}.{endDate}
          </span>
        </li>
        <li css={cssObj.flexBox}>
          <a href={job.applyUrl} css={cssObj.applyButton} target="_blank" rel="noopener noreferrer">
            채용 링크
          </a>
          <button
            css={cssObj.endJobButton}
            type="button"
            onClick={() => {
              return endJobHandler(job.id);
            }}
          >
            마감
          </button>
          <Link href={`${JD_EDIT_URL}/?id=${job.id}`} css={cssObj.editButton} passHref>
            수정
          </Link>
          <button
            css={cssObj.deleteButton}
            type="button"
            onClick={() => {
              return deleteJobHandler(job.id);
            }}
          >
            삭제
          </button>
        </li>
      </ul>
    </li>
  );
};

export default JobCard;
