import { Fragment } from "react";
import { FiChevronRight } from "react-icons/fi";

import { Chip, DDayChip } from "shared-ui/deeple-ds";
import { dDayCalculator, dateConverter } from "shared-util";

import { ReceptionGuideProps } from "./type";
import { cssObj } from "./style";

export const ReceptionGuide = ({ title, contents, processArr, startTime, endTime, cut }: ReceptionGuideProps) => {
  const contentEntries = Object.entries(contents);

  const isAlwaysJob = dDayCalculator(endTime) === "상시채용";

  return (
    <div css={cssObj.subContainer}>
      <h3 css={cssObj.title}>{title}</h3>
      <div css={cssObj.processWrapper}>
        {processArr.map((process, index) => {
          if (index === processArr.length - 1) {
            return <span key={`ReceptionProcess${process}`}>{process}</span>;
          }
          return (
            <Fragment key={`ReceptionProcess${process}`}>
              <span>{process}</span>
              <FiChevronRight css={cssObj.rightIcon} />
            </Fragment>
          );
        })}
      </div>
      <div css={cssObj.periodWrapper}>
        <div css={cssObj.timeWrapper}>
          <Chip size="small" rect>
            시작
          </Chip>
          <span css={cssObj.startTime}>{dateConverter(startTime).dateWithDay}</span>
        </div>
        <div css={cssObj.timeWrapper}>
          <Chip size="small" rect>
            종료
          </Chip>
          {isAlwaysJob && <span css={cssObj.endTime}>{cut ? "채용 시 마감" : "상시채용"}</span>}
          {!isAlwaysJob && <span css={cssObj.endTime}>{dateConverter(endTime).dateWithDay}</span>}
          {!isAlwaysJob && <DDayChip endTime={endTime} />}
        </div>
      </div>
      <div css={cssObj.contentWrapper}>
        {contentEntries.map(([subtitle, content]) => (
          <div key={`ReceptionSubtitle${subtitle}`} css={cssObj.rowWrapper}>
            <span>{subtitle}</span>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};
