import { useMemo } from "react";
import { css } from "@emotion/react";
import { DDayChip } from "shared-ui/deeple-ds";
import { dateConverter } from "shared-util";

import { isInvalidDate, isExpired } from "@/utils";

import Link from "next/link";
import { INTERNAL_URL } from "@/pages/constants";
import { JdBookmark } from "../JdBookmark";

import { JdRowProps } from "./type";
import { cssObj } from "./style";

// TODO 모바일 반응형 추가
export const JdRow = ({ jdId, companyName, jdTitle, dueDate, bookmarked, cut, half }: JdRowProps) => {
  const validDueDate = useMemo(() => {
    const date = new Date(dueDate);
    if (!isInvalidDate(date)) {
      return date;
    }
    return null;
  }, [dueDate]);

  /** NOTE JdRow 에서 end_time 이 만료인지 확인하는 로직과 DDayChip 내부에서 endTime 이 만료인지 확인하는 로직이 나뉘어 있다. 단일화 하는 게 좋아 보임. */
  const isDueDateExpired = isExpired(validDueDate || new Date(0));

  const formatDateToCustomString = (date: Date, expireWhenDueDate: boolean): string => {
    const { dueDate: dateConverterDueDate, dateWithDay } = dateConverter(date.toString());

    let customDate = dateConverterDueDate;

    if (expireWhenDueDate) {
      customDate = `${dateWithDay} 채용 시 마감`;
    }

    if (dateConverterDueDate.includes("9999")) {
      customDate = "상시 채용";
    }

    return customDate;
  };

  return (
    <Link
      href={`${INTERNAL_URL.JD_DETAIL}/${jdId}`}
      css={css`
        ${cssObj.wrapper(half)}${isDueDateExpired ? cssObj.expired : ""}
      `}
    >
      <div css={cssObj.descriptionWrapper}>
        <span css={cssObj.jdCompanyName}>{companyName}</span>
        <div css={cssObj.jdTitleWrapper}>
          <h3 css={cssObj.jdTitle}>{jdTitle}</h3>
        </div>
        <div css={cssObj.jdDueDateWrapper}>
          {validDueDate && (
            <>
              {!isDueDateExpired && formatDateToCustomString(validDueDate, !!cut) !== "상시 채용" && (
                <DDayChip endTime={dueDate} />
              )}
              <span css={cssObj.jdDueDate}>{formatDateToCustomString(validDueDate, !!cut)}</span>
            </>
          )}
        </div>
      </div>
      {!isDueDateExpired && <JdBookmark jdId={jdId} marked={bookmarked} />}
    </Link>
  );
};
