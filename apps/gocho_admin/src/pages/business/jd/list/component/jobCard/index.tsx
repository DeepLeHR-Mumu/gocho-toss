import { FunctionComponent } from "react";
import Link from "next/link";

import { dateConverter } from "shared-util";

import { INTERNAL_URL } from "@/constant";

import { JobCardProps } from "./type";
import { cssObj } from "./style";

const JobCard: FunctionComponent<JobCardProps> = ({ job, filter }) => {
  const { date: startDate } = dateConverter(job.startTime);
  const { date: endDate } = dateConverter(job.endTime);

  return (
    <tr css={cssObj.jobContainer}>
      <td css={cssObj.jobIdBox}>{job.id}</td>
      <td css={cssObj.mainInfoBox}>
        <p css={cssObj.companyName}>{job.companyName}</p>
        <p css={cssObj.jobTitle}>{job.title}</p>
      </td>
      <td css={cssObj.taskBox}>{job.task}</td>
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
            filter === "upload-waiting"
              ? `${INTERNAL_URL.BUSINESS_JD_REGISTER_URL(job.id)}`
              : `${INTERNAL_URL.BUSINESS_JD_EDIT_URL(job.id)}`
          }
        >
          상세보기
        </Link>
      </td>
    </tr>
  );
};

export default JobCard;
