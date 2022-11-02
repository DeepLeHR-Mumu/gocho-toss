import type { NextPage } from "next";
import { mainContainer, pageTitle } from "@style/commonStyles";

const Home: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>대시보드</h2>
    </main>
  );
};

export default Home;
