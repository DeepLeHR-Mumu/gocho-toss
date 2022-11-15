import { FunctionComponent } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { dataBox, dataTextPoint, dataTitle, dataWrapper, sectionTitle } from "./style";
import { UserDataPartProps } from "./type";

const UserDataPart: FunctionComponent<UserDataPartProps> = ({ dashboardData }) => {
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
  );
};

export default UserDataPart;
