import { useMemo } from "react";
import { css } from "@emotion/react";
import { DDayChip } from "shared-ui/deeple-ds";

import { isInvalidDate, isExpired } from "@/utils";

import { JdBookmark } from "../JdBookmark";

import { JdRowProps } from "./type";
import { cssObj } from "./style";

// TODO 모바일 반응형 추가
export const JdRow = ({ jdId, companyName, jdTitle, dueDate, bookmarked, half }: JdRowProps) => {
  const validDueDate = useMemo(() => {
    const date = new Date(dueDate);
    if (!isInvalidDate(date)) {
      return date;
    }
    return null;
  }, [dueDate]);

  const isDueDateExpired = isExpired(validDueDate || new Date(0));

  const getWeekdayString = (date: Date): string => {
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    return weekdays[date.getDay()];
  };

  const formatDateToCustomString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const weekday = getWeekdayString(date);

    return `${year}.${month}.${day} ${weekday}요일까지`;
  };

  return (
    <div
      css={css`
        ${cssObj.wrapper(half)}${isDueDateExpired ? cssObj.expired : ""}
      `}
    >
      <div css={cssObj.descriptionWrapper}>
        <span css={cssObj.jdCompanyName}>{companyName}</span>
        <div css={cssObj.jdTitleWrapper}>
          <h3 css={cssObj.jdTitle}>{jdTitle}</h3>
          {/** NOTE JdRow 에서 end_time 이 만료인지 확인하는 로직과 DDayChip 내부에서 endTime 이 만료인지 확인하는 로직이 나뉘어 있다. 단일화 하는 게 좋아 보임. */}
          {!isDueDateExpired && <DDayChip endTime={dueDate} />}
        </div>
        <div css={cssObj.jdDueDateWrapper}>
          <span css={cssObj.jdDueDate}>{validDueDate && formatDateToCustomString(validDueDate)}</span>
        </div>
      </div>
      {!isDueDateExpired && <JdBookmark jdId={jdId} marked={bookmarked} />}
    </div>
  );
};
