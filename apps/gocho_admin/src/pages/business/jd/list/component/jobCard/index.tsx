import { FunctionComponent } from "react";
import Link from "next/link";

import { dateConverter } from "shared-util";

import { INTERNAL_URL } from "@/constant";

import { JobCardProps } from "./type";
import { cssObj } from "./style";

const JobCard: FunctionComponent<JobCardProps> = ({ job }) => {
  const { year: startYear, month: startMonth, date: startDate } = dateConverter(job.startTime);
  const { year: endYear, month: endMonth, date: endDate } = dateConverter(job.endTime);

  return (
    <tr css={cssObj.jobContainer}>
      <td css={cssObj.jobIdBox}>{job.id}</td>
      <td css={cssObj.mainInfoBox}>
        <p css={cssObj.companyName}>{job.companyName}</p>
        <p css={cssObj.jobTitle}>{job.title}</p>
      </td>
      <td css={cssObj.taskContainer}>
        {job.taskArr.map((task) => (
          <p key={`${job.id}${task}`} css={cssObj.taskBox}>
            {task}
          </p>
        ))}
      </td>
      <td css={cssObj.dateBox}>
        {startYear}-{startMonth}-{startDate}
        <br />
        {endYear}-{endMonth}-{endDate}
      </td>
      <td css={cssObj.buttonContainer}>
        <Link
          passHref
          css={cssObj.activeButton}
          href={
            job.status.name === "등록대기"
              ? `${INTERNAL_URL.BUSINESS_JD_REGISTER_URL}/?id=${job.id}`
              : `${INTERNAL_URL.BUSINESS_JD_EDIT_URL}/?id=${job.id}`
          }
        >
          상세보기
        </Link>
      </td>
    </tr>
  );
};

export default JobCard;
