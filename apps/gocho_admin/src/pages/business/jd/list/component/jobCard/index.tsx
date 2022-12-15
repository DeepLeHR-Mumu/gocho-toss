import { FunctionComponent } from "react";
import Link from "next/link";

import { dateConverter } from "shared-util/date";

import { BUSINESS_JD_EDIT_URL, BUSINESS_JD_REGISTER_URL } from "@constant/internalURL";

import {
  activeButton,
  buttonContainer,
  companyName,
  dateBox,
  jobContainer,
  jobIdBox,
  jobTitle,
  mainInfoBox,
  taskBox,
  taskContainer,
} from "./style";
import { JobCardProps } from "./type";

const JobCard: FunctionComponent<JobCardProps> = ({ job }) => {
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
        <Link
          passHref
          href={
            job.status === "등록대기"
              ? `${BUSINESS_JD_REGISTER_URL}/?id=${job.id}`
              : `${BUSINESS_JD_EDIT_URL}/?id=${job.id}`
          }
        >
          <a css={activeButton}>상세보기</a>
        </Link>
      </td>
    </tr>
  );
};

export default JobCard;
