import { FunctionComponent } from "react";
import Link from "next/link";

import { dateConverter } from "shared-util";

import { INTERNAL_URL } from "@/constant";

import { JobCardProps } from "./type";
import { cssObj } from "./style";

const JobCard: FunctionComponent<JobCardProps> = ({ job }) => {
  const { date: startDate } = dateConverter(job.startTime);
  const { date: endDate } = dateConverter(job.endTime);

  return (
    <tr css={cssObj.jobContainer}>
      <td css={cssObj.jobIdBox}>{job.id}</td>
      <td css={cssObj.mainInfoBox}>
        <p css={cssObj.companyName}>{job.companyName}</p>
        <p css={cssObj.jobTitle}>{job.title}</p>
      </td>
      <p key={job.task} css={cssObj.taskBox}>
        {job.task}
      </p>
      <td css={cssObj.dateBox}>
        {startDate}
        <br />
        {endDate}
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
