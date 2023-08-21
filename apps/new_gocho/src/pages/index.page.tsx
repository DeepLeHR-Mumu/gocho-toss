import { NextPage } from "next";

import { Layout } from "@/components";

const Home: NextPage = () => {
  return (
    <main>
      <Layout>
        <h2>실시간 HOT 공고</h2>
        <h2>키워드 별 기업 모아보기</h2>
        <h2>인기 QnA 살펴보기</h2>
      </Layout>
    </main>
  );
};

export default Home;
