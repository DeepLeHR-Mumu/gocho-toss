import { FunctionComponent } from "react";

import { Layout } from "@component/layout";

import { JobAdCardList } from "../../component/jobAdCardList";
import { partContainer, title, colorPoint } from "./style";

export const AdPart: FunctionComponent = () => {
  return (
    <section css={partContainer}>
      <Layout>
        <p css={title}>
          <span css={colorPoint}>Today</span> 오늘의 추천 공고 🙌🏻
        </p>
        <JobAdCardList />
      </Layout>
    </section>
  );
};
