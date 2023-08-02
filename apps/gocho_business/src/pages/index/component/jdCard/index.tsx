import { FunctionComponent } from "react";
import dayjs from "dayjs";

import { CommonStatusChip } from "@/components";

import { cssObj } from "./style";
import { JdCardProps } from "./type";

export const JdCard: FunctionComponent<JdCardProps> = ({ jd }) => {
  const isExpired = dayjs(jd.endTime).isBefore(dayjs());
  const isJdActive = jd.status.name === "진행중" || jd.status.name === "수정대기" || jd.status.name === "수정반려";

  const jdDateMaker = () => {
    if (jd.cut) return `${dayjs(jd.startTime).format("YYYY.MM.DD")}~채용 시 마감`;
    if (dayjs(jd.endTime).year() === 9999) return `${dayjs(jd.startTime).format("YYYY.MM.DD")}~상시채용`;
    return `${dayjs(jd.startTime).format("YYYY.MM.DD")}~${dayjs(jd.endTime).format("YYYY.MM.DD")}`;
  };

  return (
    <div css={cssObj.cardContainer}>
      <CommonStatusChip status={jd.status.name} isExpired={isExpired} />
      <strong css={cssObj.title}>{jd.title}</strong>
      <div css={cssObj.infoContainer}>
        <div css={cssObj.infoBox}>
          <p css={cssObj.info}>공고번호</p>
          <p css={cssObj.info}>{jd.id}</p>
        </div>
        <div css={cssObj.infoBox}>
          <p css={cssObj.info}>{jdDateMaker()}</p>
        </div>
        {isJdActive && (
          <div css={cssObj.infoBox}>
            <p css={cssObj.info}>조회수</p>
            <p css={cssObj.info}>{jd.view}</p>
          </div>
        )}
      </div>
    </div>
  );
};
