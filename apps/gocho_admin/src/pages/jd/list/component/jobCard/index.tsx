import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { jobArrKeyObj } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { dateConverter } from "shared-util/date";

import { useDeleteJob } from "@api/job/useDeleteJob";
import { useEndJob } from "@api/job/useEndJob";

import {
  activeButton,
  buttonContainer,
  companyName,
  dateBox,
  deleteButton,
  jobContainer,
  jobIdBox,
  jobTitle,
  mainInfoBox,
  taskBox,
  taskContainer,
} from "./style";
import { JobCardProps } from "./type";

const JobCard: FunctionComponent<JobCardProps> = ({ job }) => {
  const queryClient = useQueryClient();

  const { mutate: deleteJobMutate } = useDeleteJob();
  const { mutate: endJobMutate } = useEndJob();

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
    <tr css={jobContainer}>
      <td css={jobIdBox}>{job.id}</td>
      <td css={mainInfoBox}>
        <p css={companyName}>{job.companyName}</p>
        <p css={jobTitle}>{job.title}</p>
      </td>
      <td css={taskContainer}>
        {job.taskArr.map((task) => {
          return (
            <p key={`${job.id}${task}`} css={taskBox}>
              {task}
            </p>
          );
        })}
      </td>
      <td css={dateBox}>
        {startYear}-{startMonth}-{startDate}
        <br />
        {endYear}-{endMonth}-{endDate}
      </td>
      <td css={buttonContainer}>
        <a css={activeButton} href={job.applyUrl} target="_blank" rel="noopener noreferrer">
          채용 링크
        </a>
        <button css={activeButton} type="button">
          수정
        </button>
        <button
          css={deleteButton}
          type="button"
          onClick={() => {
            return deleteJobHandler(job.id);
          }}
        >
          삭제
        </button>
        <button
          css={activeButton}
          type="button"
          onClick={() => {
            return endJobHandler(job.id);
          }}
        >
          마감하기
        </button>
      </td>
    </tr>
  );
};

export default JobCard;
