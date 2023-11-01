import { useRouter } from "next/router";

import { useJdStatistics } from "@/apis";

import { containerStyle } from "../../style";

import { cssObj } from "./style";

export const JdStatisticsPart = () => {
  const router = useRouter();
  const { data: jdStatistics } = useJdStatistics(Number(router.query.jdId));

  if (!jdStatistics) {
    return <> </>;
  }

  return (
    <section css={containerStyle}>
      <div css={cssObj.statisticsWrapper}>
        <div css={cssObj.eachStatisticsWrapper}>
          <span>공고 조회</span>
          <p>{jdStatistics.view > 999999 ? "999,999+" : jdStatistics.view.toLocaleString()}</p>
        </div>
        <div css={cssObj.verticalDividerLarge} />
        <div css={cssObj.eachStatisticsWrapper}>
          <span>공고 찜</span>
          <p>{jdStatistics.bookmark.toLocaleString()}</p>
        </div>
        <div css={cssObj.verticalDividerLarge} />
        <div css={cssObj.eachStatisticsWrapper}>
          <span>전체 지원자</span>
          <p>{jdStatistics.totalApplicant}</p>
        </div>
        <div css={cssObj.verticalDividerLarge} />
        <div css={cssObj.eachStatisticsWrapper}>
          <span>미열람</span>
          <p>{jdStatistics.unreadApplicant}</p>
        </div>
      </div>
    </section>
  );
};
