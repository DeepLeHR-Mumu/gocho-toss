import { FunctionComponent } from "react";

import { useStatistics } from "@/api/stat/useStatistics";

import Graph from "../../component/graph";
import { dataBox, dataTextPoint, dataTitle, dataWrapper, sectionTitle } from "./style";

const UserDataPart: FunctionComponent = () => {
  const { data: dashboardData, isLoading } = useStatistics();

  if (!dashboardData || isLoading) {
    return <div />;
  }

  return (
    <section>
      <h3 css={sectionTitle}>유저 관련</h3>
      <div css={dataWrapper}>
        <div css={dataBox}>
          <strong css={dataTitle}>총 유저 수</strong>
          <p css={dataTextPoint}>{dashboardData.allUsers}</p>
        </div>
        <div css={dataBox}>
          <strong css={dataTitle}>오늘 가입한 수</strong>
          <p css={dataTextPoint}>{dashboardData.todayUser}</p>
        </div>
      </div>
      <Graph data={dashboardData.userGraphData} name="유저 수" domain={[0, 4000]} />
    </section>
  );
};

export default UserDataPart;
