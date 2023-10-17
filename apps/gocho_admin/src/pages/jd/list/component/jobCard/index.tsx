import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { dateConverter } from "shared-util";
import { SharedButton } from "shared-ui/common/sharedButton";

import { useDeleteJd, useEndJd } from "@/api";
import { INTERNAL_URL } from "@/constant";

import { JobCardProps } from "./type";
import { cssObj } from "./style";

export const JobCard: FunctionComponent<JobCardProps> = ({ job }) => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate: deleteJobMutate } = useDeleteJd();
  const { mutate: endJobMutate } = useEndJd();

  const deleteJobHandler = (jdId: number) => {
    deleteJobMutate(
      { jdId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
        },
      }
    );
  };

  const endJobHandler = (jdId: number) => {
    endJobMutate(
      { jdId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
        },
      }
    );
  };

  const { date: startDate } = dateConverter(job.startTime);
  const { year: endYear, date: endDate } = dateConverter(job.endTime);

  return (
    <li css={cssObj.wrapper} data-testid="jd/list/jobCard">
      <ul css={cssObj.container}>
        <li css={cssObj.centerDesc}>{job.id}</li>
        <li css={cssObj.leftDesc}>
          <span css={cssObj.companyName}>{job.companyName}</span>
          {job.title}
        </li>
        <li css={cssObj.taskBox}>
          <p css={cssObj.task}>{job.task}</p>
        </li>
        <li css={cssObj.leftDesc}>
          <span css={cssObj.startDateCSS}>{startDate}</span>
          <span css={cssObj.endDateCSS}>{endYear === "9999" ? "상시공고" : endDate}</span>
        </li>
        <li css={cssObj.flexBox}>
          <a href={job.applyUrl} css={cssObj.applyButton} target="_blank" rel="noopener noreferrer">
            채용 링크
          </a>
          <SharedButton buttonType="fillWhite" width={4.5} onClickHandler={() => endJobHandler(job.id)} text="마감" />
          <SharedButton
            buttonType="fillBlue"
            width={4.5}
            onClickHandler={() => router.push(`${INTERNAL_URL.JD_EDIT_URL}/?id=${job.id}`)}
            text="수정"
          />
          <SharedButton buttonType="fillRed" width={4.5} onClickHandler={() => deleteJobHandler(job.id)} text="삭제" />
        </li>
      </ul>
    </li>
  );
};
