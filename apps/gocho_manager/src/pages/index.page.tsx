import type { NextPage } from "next";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { useStatistics } from "@api/stat/useStatistics";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import { sectionTitle } from "./style";

const Home: NextPage = () => {
  const { data: dashboardData, isLoading, isError } = useStatistics();

  if (!dashboardData || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>대시보드</h2>
      <section>
        <h3 css={sectionTitle}>유저 관련</h3>
        <p>총 유저 수: {dashboardData.allUsers}</p>
        <p>오늘 가입한 수: {dashboardData.todayUser}</p>
        <LineChart width={730} height={300} data={dashboardData.userGraphData} margin={{ top: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#2961cd" />
        </LineChart>
      </section>
      <section>
        <h3 css={sectionTitle}>홈페이지 관련</h3>
        <p>오늘 올라간 공고 수: {dashboardData.todayJds}</p>
        <p>오늘 공고 북마 수: {dashboardData.todayJdBookmarks}</p>
        <p>오늘 회사 북마크 수: {dashboardData.todayCompanyBookmarks}</p>
        <p>오늘 작성된 댓글 수: {dashboardData.todayComments}</p>
      </section>
    </main>
  );
};

export default Home;
