import { FiChevronRight } from "react-icons/fi";

import { Chip, DDayChip } from "shared-ui/deeple-ds";
import { dateConverter } from "shared-util";

import { ReceptionGuideProps } from "./type";
import { cssObj } from "./style";

export const ReceptionGuide = ({ title, contents, processArr, startTime, endTime }: ReceptionGuideProps) => {
  const contentEntries = Object.entries(contents);

  return (
    <div css={cssObj.subContainer}>
      <h3 css={cssObj.title}>{title}</h3>
      <div css={cssObj.processWrapper}>
        {processArr.map((process, index) => {
          if (index === processArr.length - 1) {
            return <span key={`ReceptionProcess${process}`}>{process}</span>;
          }
          return (
            <>
              <span>{process}</span>
              <FiChevronRight css={cssObj.rightIcon} />
            </>
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
          <span css={cssObj.endTime}>{dateConverter(endTime).dateWithDay}</span>
          <DDayChip endTime={endTime} />
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
