import type { NextPage } from "next";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { useStatistics } from "@api/stat/useStatistics";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import { sectionTitle, graphContainer, dataWrapper, dataBox, dataTitle, dataTextPoint, dataText } from "./style";

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
        <div css={dataWrapper}>
          <div css={dataBox}>
            <strong css={dataTitle}>총 유저 수</strong>
            <p css={dataTextPoint}>{dashboardData.allUsers}</p>
          </div>
          <div css={dataBox}>
            <strong css={dataTitle}>오늘 가입한 수</strong>
            <p css={dataText}>{dashboardData.todayUser}</p>
          </div>
        </div>

        <ResponsiveContainer width="70%" height={300}>
          <LineChart data={dashboardData.userGraphData} margin={{ top: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis type="number" domain={[0, 4000]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#2961cd" name="유저 수" />
          </LineChart>
        </ResponsiveContainer>
      </section>
      <section>
        <h3 css={sectionTitle}>홈페이지 관련</h3>
        <div css={dataWrapper}>
          <div css={dataBox}>
            <strong css={dataTitle}>오늘 올라간 공고 수</strong>
            <p css={dataText}>{dashboardData.todayJds}</p>
          </div>
          <div css={dataBox}>
            <strong css={dataTitle}>오늘 공고 북마크 수</strong>
            <p css={dataText}>{dashboardData.todayJdBookmarks}</p>
          </div>
          <div css={dataBox}>
            <strong css={dataTitle}>오늘 회사 북마크 수</strong>
            <p css={dataText}>{dashboardData.todayCompanyBookmarks}</p>
          </div>
          <div css={dataBox}>
            <strong css={dataTitle}>오늘 작성된 댓글 수</strong>
            <p css={dataText}>{dashboardData.todayComments}</p>
          </div>
        </div>
        <div css={graphContainer}>
          <ResponsiveContainer width="49%" height={300}>
            <LineChart data={dashboardData.commentGraphData} margin={{ top: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis type="number" domain={[0, 1000]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#2961cd" name="댓글 수" />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="49%" height={300}>
            <LineChart data={dashboardData.postingGraphData} margin={{ top: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis type="number" domain={[0, 200]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#2961cd" name="게시물 수" />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="49%" height={300}>
            <LineChart data={dashboardData.jdBookmarkGraphData} margin={{ top: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis type="number" domain={[0, 4000]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#2961cd" name="공고 북마크 수" />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="49%" height={300}>
            <LineChart data={dashboardData.companyBookmarkGraphData} margin={{ top: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis type="number" domain={[0, 1000]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#2961cd" name="기업 북마크 수" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </main>
  );
};

export default Home;
