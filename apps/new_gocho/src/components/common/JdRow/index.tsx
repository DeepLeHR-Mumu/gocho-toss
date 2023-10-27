import Link from "next/link";
import { css } from "@emotion/react";
import { DDayChip } from "shared-ui/deeple-ds";
import { dateConverter, dDayCalculator } from "shared-util";

import { INTERNAL_URL } from "@/constants";
import { SkeletonBox } from "../SkeletonBox";
import { JdBookmark } from "../JdBookmark";

import { JdRowProps } from "./type";
import { cssObj } from "./style";

export const JdRow = ({ jd, half, replace, callback }: JdRowProps) => {
  if (!jd) {
    return (
      <div css={cssObj.skeletonWrapper}>
        <SkeletonBox />
      </div>
    );
  }

  const isDueDateExpired = dDayCalculator(jd.dueDate) === "만료";

  const { jdId, companyName, jdTitle, dueDate, bookmarked, cut } = jd;

  return (
    <div
      css={css`
        ${cssObj.wrapper(half)}${isDueDateExpired ? cssObj.expired : ""}
      `}
    >
      <div css={cssObj.descriptionWrapper}>
        <Link
          href={`${INTERNAL_URL.JD_DETAIL}/${jdId}`}
          replace={replace}
          onClick={callback}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span css={cssObj.jdCompanyName}>{companyName}</span>
        </Link>
        <Link
          href={`${INTERNAL_URL.JD_DETAIL}/${jdId}`}
          replace={replace}
          onClick={callback}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div css={cssObj.jdTitleWrapper}>
            <h3 css={cssObj.jdTitle}>{jdTitle}</h3>
          </div>
        </Link>
        <Link href={`${INTERNAL_URL.JD_DETAIL}/${jdId}`} replace={replace} onClick={callback}>
          <div css={cssObj.jdDueDateWrapper}>
            {dDayCalculator(dueDate) !== "상시채용" ? (
              <>
                <DDayChip endTime={dueDate} />
                <span css={cssObj.jdDueDate}>{dateConverter(dueDate).dueDate}</span>
              </>
            ) : (
              <span css={cssObj.jdDueDate}>상시채용</span>
            )}
            {cut && <span css={cssObj.jdDueDate}>(채용 시 마감)</span>}
          </div>
        </Link>
      </div>
      {!isDueDateExpired && <JdBookmark jdId={jdId} isBookmarked={bookmarked} />}
    </div>
  );
};
