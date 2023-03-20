import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { jobArrKeyObj } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { dateConverter } from "shared-util";
import { NormalButton } from "shared-ui/common/atom/button/normalButton";
import { LinkButton } from "shared-ui/common/atom/button/linkButton";

import { useDeleteJd, useEndJd } from "@/api";
import { INTERNAL_URL } from "@/constant";

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
          {job.taskArr.map((task) => (
            <span css={cssObj.task} key={`${job.id}${task}`}>
              {task}
            </span>
          ))}
        </li>
        <li css={cssObj.leftDesc}>
          <span css={cssObj.startDateCSS}>
            {startYear}.{startMonth}.{startDate}
          </span>
          <span css={cssObj.endDateCSS}>{endYear === 9999 ? "상시공고" : `${endYear}.${endMonth}.${endDate}`}</span>
        </li>
        <li css={cssObj.flexBox}>
          <a href={job.applyUrl} css={cssObj.applyButton} target="_blank" rel="noopener noreferrer">
            채용 링크
          </a>
          <NormalButton text="마감" wide={false} variant="filled" buttonClick={() => endJobHandler(job.id)} />
          <LinkButton
            linkTo={`${INTERNAL_URL.JD_EDIT_URL}/?id=${job.id}`}
            text="수정"
            wide={false}
            variant="outlined"
          />
          <NormalButton text="삭제" wide={false} variant="text" buttonClick={() => deleteJobHandler(job.id)} />
        </li>
      </ul>
    </li>
  );
};

export default JobCard;
