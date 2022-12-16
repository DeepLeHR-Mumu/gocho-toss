import { FunctionComponent } from "react";

import { useStatistics } from "@api/stat/useStatistics";

import Graph from "../../component/graph";
import { dataBox, flexBox, dataText, dataTitle, dataWrapper, sectionTitle } from "./style";

const WebsiteDataPart: FunctionComponent = () => {
  const { data: dashboardData, isLoading } = useStatistics();

  if (!dashboardData || isLoading) {
    return <div />;
  }

  return (
    <section>
      <h3 css={sectionTitle}>홈페이지 관련</h3>
      <div css={dataWrapper}>
        <div css={dataBox}>
          <div css={flexBox}>
            <strong css={dataTitle}>오늘 작성된 댓글 수</strong>
            <p css={dataText}>{dashboardData.todayComments}</p>
          </div>
          <Graph data={dashboardData.commentGraphData} name="댓글 수" domain={[0, 1000]} />
        </div>
        <div css={dataBox}>
          <div css={flexBox}>
            <strong css={dataTitle}>오늘 공고 북마크 수</strong>
            <p css={dataText}>{dashboardData.todayJdBookmarks}</p>
          </div>
          <Graph data={dashboardData.jdBookmarkGraphData} name="공고 북마크 수" domain={[0, 3000]} />
        </div>
        <div css={dataBox}>
          <div css={flexBox}>
            <strong css={dataTitle}>오늘 회사 북마크 수</strong>
            <p css={dataText}>{dashboardData.todayCompanyBookmarks}</p>
          </div>
          <Graph data={dashboardData.companyBookmarkGraphData} name="기업 북마크 수" domain={[0, 1000]} />
        </div>
        <div css={dataBox}>
          <div css={flexBox}>
            <strong css={dataTitle}>오늘 올라온 공고 수</strong>
            <p css={dataText}>{dashboardData.todayJds}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDataPart;
