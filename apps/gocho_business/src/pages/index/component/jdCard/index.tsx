import { FunctionComponent } from "react";
import dayjs from "dayjs";

import { CommonStatusChip } from "@/components";

import { cssObj } from "./style";
import { JdCardProps } from "./type";

export const JdCard: FunctionComponent<JdCardProps> = ({ jd }) => {
  const isExpired = dayjs(jd.endTime).isBefore(dayjs());

  return (
    <div css={cssObj.cardContainer}>
      <CommonStatusChip status={jd.status.name} isExpired={isExpired} />
      <strong css={cssObj.title}>{jd.title}</strong>
      <div>{jd.cut && <p css={cssObj.date}>채용시 마감</p>}</div>
      <div css={cssObj.infoContainer}>
        <div css={cssObj.infoBox}>
          <p css={cssObj.info}>공고번호</p>
          <p css={cssObj.info}>{jd.id}</p>
        </div>
        <div css={cssObj.infoBox}>
          <p css={cssObj.info}>{`${dayjs(jd.startTime).format("YYYY.MM.DD")}~${dayjs(jd.endTime).format(
            "YYYY.MM.DD"
          )}`}</p>
        </div>
        {jd.updatedTime ? (
          <div css={cssObj.infoBox}>
            <p css={cssObj.info}>수정일</p>
            <p css={cssObj.info}>{dayjs(jd.updatedTime).format("YY.MM.DD")}</p>
          </div>
        ) : (
          <div css={cssObj.infoBox}>
            <p css={cssObj.info}>등록일</p>
            <p css={cssObj.info}>{dayjs(jd.createdTime).format("YY.MM.DD")}</p>
          </div>
        )}
      </div>
    </div>
  );
};
