import { FunctionComponent } from "react";

import { dateConverter, dDayCalculator } from "shared-util/date";

import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { NoDataDesc } from "../common/component/noDataDesc";

import { ReceptInfoPartProps } from "./type";
import {
  sectionWrapper,
  beforeAfterDateBox,
  cutBox,
  desc,
  detailTitle,
  flexBox,
  infoBox,
  infoDetailBox,
  infoTitle,
  processBox,
  restPoint,
  flexAlignBox,
} from "./style";

export const ReceptInfoPart: FunctionComponent<ReceptInfoPartProps> = ({ jobDetailData }) => {
  const {
    year: startYear,
    month: startMonth,
    date: startDate,
    hour: startHour,
    minute: startMinute,
  } = dateConverter(jobDetailData.startTime);

  const {
    year: endYear,
    month: endMonth,
    date: endDate,
    hour: endHour,
    minute: endMinute,
  } = dateConverter(jobDetailData.endTime);

  const isJobEnd = dDayCalculator(jobDetailData.endTime) === "만료";
  return (
    <div>
      <section css={sectionWrapper}>
        <div css={infoBox(isJobEnd)}>
          <h4 css={infoTitle}>접수안내</h4>
          <ul css={beforeAfterDateBox}>
            <li>{`${startYear}. ${startMonth}. ${startDate}  ${startHour}:${startMinute}`}</li>
            <li>~</li>
            <li>{`${endYear}. ${endMonth}. ${endDate}  ${endHour}:${endMinute}`}</li>
          </ul>
          <div css={flexAlignBox}>
            <DdayBox endTime={jobDetailData.endTime} />
            {jobDetailData.cut && <div css={cutBox}>채용시마감</div>}
          </div>
        </div>

        <div css={infoDetailBox}>
          <p css={detailTitle}>채용절차</p>
          {jobDetailData.processArr.length > 4 ? (
            <>
              <ul css={processBox}>
                {jobDetailData.processArr.map((process, index) => {
                  return index < 3 && <li key={`채용절차_${process}`}>{process}</li>;
                })}
              </ul>
              <ul css={processBox}>
                {jobDetailData.processArr.map((process, index) => {
                  return index > 2 && <li key={`채용절차_${process}`}>{process}</li>;
                })}
              </ul>
            </>
          ) : (
            <ul css={processBox}>
              {jobDetailData.processArr.map((process) => {
                return <li key={`채용절차_${process}`}>{process}</li>;
              })}
            </ul>
          )}

          <div css={flexBox}>
            <p css={detailTitle}>지원방법</p>
            <p css={desc}>
              {jobDetailData.applyRouteArr.map((route) => {
                return (
                  <span css={restPoint} key={`지원방법_${route}`}>
                    {route}
                  </span>
                );
              })}
            </p>
          </div>

          <div css={flexBox}>
            <p css={detailTitle}>기타사항</p>
            {jobDetailData.etcArr ? (
              <p css={desc}>
                {jobDetailData.etcArr.map((etc) => {
                  return (
                    <span css={restPoint} key={`기타사항_${etc}`}>
                      {etc}
                    </span>
                  );
                })}
              </p>
            ) : (
              <NoDataDesc />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
